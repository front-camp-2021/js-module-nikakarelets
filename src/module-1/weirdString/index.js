export const weirdString = (str = "") => {

  return str.toUpperCase().replace(/[A-Z]\b/g,  value => {
    return value.toLowerCase()
  });
};

