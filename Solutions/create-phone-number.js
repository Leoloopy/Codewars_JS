function createPhoneNumber(numbers) {
  let jr = numbers.join("").replace(/,/g, "");
  return "(" + jr.slice(0, 3) + ") " + jr.slice(3, 6) + "-" + jr.slice(6, 11);
}
