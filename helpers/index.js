export function sumofdigits(num) {
if (num < 10) {
  return num;
}else{
  return (num % 10) + sumofdigits (Math.floor(num/10));
}
 
}
