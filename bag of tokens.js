
var bagOfTokensScore = function (a, power) {
  // sorting an array
  a.sort((a, b) => a - b);
  let score = 0;
  let ans = 0;
  let low = 0;
  // let ans = 0;
  let high = a.length - 1;

  while (low <= high) {
    if (power - a[low] >= 0) {
      power -= a[low];
      low += 1;
      score += 1;
      ans = Math.max(ans, score);
    } else if (score > 0 && power - a[low] <= 0) {
      power += a[high];
      high -= 1;
      score -= 1;
    } else {
      return ans;
    }
  }
  return ans;
};
