export const weirdString = (str = "") => {

  return str.toUpperCase().replace(/[A-Z]\b/g, function (value) {
    return value.toLowerCase()
  });
};

