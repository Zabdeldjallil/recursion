export function countDown(n) {

  if (n === 0) {
    return 0
  } else {
    return n + countDown(n - 1);
  }

}
