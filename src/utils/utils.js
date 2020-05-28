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

export const formatTopic = (topic) => {
  return topic.slice(0, 1).toUpperCase() + topic.slice(1);
};

export const checkValidTopic = (topic) => {
  if (topic.match(/\s/g)) return false;
  else return true;
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
