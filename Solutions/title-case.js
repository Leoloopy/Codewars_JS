const titleCase = (title, minorWords) => {
  if (!title) return title;

  let cap = (word) => word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || "").toLowerCase().split(" ");

  let result = title
    .toLowerCase()
    .replace(/\S+/g, (w) => (minors.indexOf(w) === -1 ? cap(w) : w));

  return cap(result);
};
