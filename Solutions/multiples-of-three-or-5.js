function solution(number) {
  var arr = [];
  var arrTwo = [];

  for (let i = 1; i < number; i++) {
    let threeMultiples = 3 * i;
    let fiveMultiples = 5 * i;

    if (threeMultiples < number) {
      arr.push(threeMultiples);
    }
    if (fiveMultiples < number) {
      arr.push(fiveMultiples);
    }
  }

  let saveBothArr = arr.concat(arrTwo);
  let uniqueMultiples = [...new Set(saveBothArr)];
  return uniqueMultiples.reduce((sum, current) => sum + current, 0);
}
