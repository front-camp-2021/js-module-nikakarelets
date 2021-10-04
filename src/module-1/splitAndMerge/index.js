export const splitAndMerge = (str = "", separator = "") => {
  const resultWords = str.split(" ").map(value => {
    return value.split("").join(separator)
  });

  return resultWords.join(" ")
};
