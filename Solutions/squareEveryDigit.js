function squareDigits(num) {
  let toLetter = num + "";
  let splitLetter = toLetter.split("");
  let toMap = splitLetter.map((i) => Number(i));
  let saveMap;
  saveMap = toMap;
  let joinNum = saveMap.map((i) => Math.pow(i, 2)).join("");
  return parseInt(joinNum);
}
squareDigits(9119);
2;
