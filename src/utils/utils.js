export const formatDate = date => {
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
