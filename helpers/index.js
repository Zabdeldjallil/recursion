export function sumofdigits(num) {
if (num < 10) {
  return num;
}else{
  return (num % 10) + sumofdigits (Math.floor(num/10));
}
 
}

export function palindromeChecker(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str [1];
  if(str[0] === str.slice(-1)) return palindromeChecker(str.slice(1,-1))
  return false
}

export function stringReversal(str) {
  if (str === "") {
    return "";
} else {
    return stringReversal(str.substr(1)) + str.charAt(0);
}
}
