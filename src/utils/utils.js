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
