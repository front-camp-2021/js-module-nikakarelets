 export const debounce = (fn, delay = 0) => {
  let timeout;

  return function (...args) {
    const fnCall = () => {
      console.log(fn.apply(this, args))
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, delay)
  }
};
