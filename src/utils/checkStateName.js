const states = [
  "assam",
  "meghalaya",
  "arunachal pradesh",
  "manipur",
  "nagaland",
  "mizoram",
  "tripura",
];

export const checkStateName = (resText) => {
  var smText = resText.toLowerCase();
  return states.filter((item) => {
    if (smText.includes(item)) {
      return item;
    }
    return null;
  });
};
