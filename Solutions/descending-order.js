function descendingOrder(n) {
  n += "";
  return parseInt(
    n
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
