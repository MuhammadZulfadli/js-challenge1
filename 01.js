const palindrome1 = "ibu ratna antar ubi"
const palindrome2 = "kasur ini rusak"
const palindrome3 = "A nut for a jar of tuna."
const palindrome4 = "Borrow or rob?"
const palindrome5 = "Was it a car or a cat I saw?"
const palindrome6 = "Yo, banana boy!"
const palindrome7 = "UFO tofu?"

function palindrome (str) {
  let string = str.replace(/[^\w]/gi, "").toLowerCase(); 
  return string == string.split('').reverse().join('');
}


console.log(palindrome(palindrome1));
console.log(palindrome(palindrome2));
console.log(palindrome(palindrome3));
console.log(palindrome(palindrome4));
console.log(palindrome(palindrome5));
console.log(palindrome(palindrome6));
console.log(palindrome(palindrome7));



