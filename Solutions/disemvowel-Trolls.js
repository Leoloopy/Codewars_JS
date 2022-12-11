function disemvowel(str) {
  str += "";
  let replaceStr = str.replace(/[aeiou]/gi, "");
  return replaceStr;
}
