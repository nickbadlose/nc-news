import moment from "moment";

export const timeSince = (timestamp) => {
  const currentTime = moment(Date.now());
  const actionTime = moment(timestamp);
  if (currentTime.diff(actionTime, "years") > 1) {
    return `${currentTime.diff(actionTime, "years")} years ago`;
  }
  if (currentTime.diff(actionTime, "years") === 1) {
    return "1 year ago";
  }
  if (currentTime.diff(actionTime, "months") > 1) {
    return `${currentTime.diff(actionTime, "months")} months ago`;
  }
  if (currentTime.diff(actionTime, "months") === 1) {
    return "1 month ago";
  }
  if (currentTime.diff(actionTime, "weeks") > 1) {
    return `${currentTime.diff(actionTime, "weeks")} weeks ago`;
  }
  if (currentTime.diff(actionTime, "weeks") === 1) {
    return "1 week ago";
  }
  if (currentTime.diff(actionTime, "days") > 1) {
    return `${currentTime.diff(actionTime, "days")} days ago`;
  }
  if (currentTime.diff(actionTime, "days") === 1) {
    return "1 day ago";
  }
  if (currentTime.diff(actionTime, "hours") > 1) {
    return `${currentTime.diff(actionTime, "hours")} hours ago`;
  }
  if (currentTime.diff(actionTime, "hours") === 1) {
    return "1 hour ago";
  } else return "Less than an hour ago";
};

export const formatDate = (date) => {
  const dateObj = {};
  if (date === undefined) {
    dateObj.date = undefined;
    dateObj.time = undefined;
  } else {
    const splitDate = date.split("T");
    dateObj.date = splitDate[0];
    dateObj.time = splitDate[1].slice(0, 5);
  }
  return dateObj;
};

export const checkValidUser = (users, username) => {
  return users.every((user) => user.username !== username);
};

export const checkUsernameFormat = (username) => {
  if (username.match(/[^a-zA-Z\d]/g)) return true;
  else return false;
};

export const checkValidPassword = (password) => {
  if (password.match(/\s/g)) return true;
  else if (password.match(/[a-zA-Z]/g) && password.match(/\d/g)) return false;
  else return true;
};

export const formatTopic = (topic) => {
  return topic.slice(0, 1).toUpperCase() + topic.slice(1);
};

export const checkValidTopic = (topic) => {
  if (topic.match(/\s/g)) return false;
  else return true;
};

export const formatUserContributions = (articles, comments) => {
  const articlesComments = [...articles, ...comments];
  const formattedArticlesComments = articlesComments.map((item) => {
    item.created_at = new Date(item.created_at).getTime();
    return item;
  });

  return formattedArticlesComments.sort((a, b) => {
    return b.created_at - a.created_at;
  });
};

export const formatFontSize = (paragraph) => {
  let fontSize = 1.5;
  if (paragraph.length < 25) fontSize = 1.5;
  else if (paragraph.length < 30) fontSize = 1.4;
  else if (paragraph.length < 35) fontSize = 1.35;
  else if (paragraph.length < 45) fontSize = 1.3;
  else if (paragraph.length < 50) fontSize = 1.25;
  else if (paragraph.length < 55) fontSize = 1.2;
  else if (paragraph.length < 60) fontSize = 1.15;
  else if (paragraph.length < 65) fontSize = 1.1;
  else if (paragraph.length < 70) fontSize = 1.05;
  else if (paragraph.length < 80) fontSize = 1.0;
  else if (paragraph.length < 85) fontSize = 0.95;
  else if (paragraph.length >= 85) fontSize = 0.9;

  return `${fontSize}rem`;
};
