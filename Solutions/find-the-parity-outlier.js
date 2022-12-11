function findOutlier(...integers) {
  integers += "";
  let saveOdds = [];
  let saveEven = [];
  let makeArray = integers.split(",").map((item) => Number(item));
  for (let n of makeArray) {
    n % 2 !== 0 ? saveOdds.push(n) : saveEven.push(n);
  }
  if (saveOdds.length > saveEven.length) {
    return parseInt(saveEven);
  } else {
    return parseInt(saveOdds);
  }
}
