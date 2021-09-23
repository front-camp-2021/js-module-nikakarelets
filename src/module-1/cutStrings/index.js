export const cutStrings = (arr = []) => {
  if (arr.length > 0) {
    let shortestStr = arr.reduce((a, b) => a.length <= b.length ? a : b);
    let result = [];

    arr.forEach(function (value) {
      result.push(value.slice(0, shortestStr.length))
    });

    return result
  } else {
    return []
  }
};
