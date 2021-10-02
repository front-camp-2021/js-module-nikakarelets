export const cutStrings = (arr = []) => {
  if (arr.length > 0) {
    let shortestWord = arr[0];
    arr.forEach(value => value.length < shortestWord.length ? shortestWord = value : "");

    return arr.map(value => {
      return value.slice(0, shortestWord.length)
    })
  }

  return []
};
