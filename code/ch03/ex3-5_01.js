const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

console.log(countdown(10, (value) => console.log(value)));
