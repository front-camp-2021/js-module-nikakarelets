export const splitAndMerge = (str = "", separator = "") => {
  let splitStr =  str.split(" ");
  let result= [];

  splitStr.forEach(function (value) {
    result.push(value.split("").join(separator))
  });

  return result.join(" ")
};
