function anagrams(word, words) {
  return words.filter((e) => {
    return e.split("").sort("").join("") === word.split("").sort("").join("");
  });
}
