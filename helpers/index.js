export function power(b, exp) {
  if (exp === 0) {
      return 1;
  } else {
      return b * power(b, exp - 1);
  }
}
