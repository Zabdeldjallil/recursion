export function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          total += sumArray(arr[i]);
      } else {
          total += arr[i];
      }
  }

  return total;
}