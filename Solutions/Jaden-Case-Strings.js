function convertToUpperCase(strings) {
  return strings
    .split(" ")
    .map((x) => x.toUpperCase())
    .join(" ");
}

let str = "i love u";

console.log(convertToUpperCase(str));
