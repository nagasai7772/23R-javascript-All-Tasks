var score = 90;
score >= 90
  ? console.log("Excellent")
  : score <= 89 && score >= 60
  ? console.log("good")
  : console.log("Need improvement");

var Day = "saturday";

Day == "saturday" || Day == "sunday"
  ? console.log("Weekend")
  : console.log("Weekday");

var str = "world";
var str1 = "";
for (i = str.length - 1; i >= 0; i--) {
  str1 += str[i];
}
console.log(str1);

(str==str1)?console.log("It's a palindrome"):console.log("It's not a paindrome");

// if (str == str1) {
//   console.log("It's a palindrome");
// } else {
//   console.log("it's not a palindrome");
// }

var str2 = "HELLO";
var str3 = "";
for (i = 0; i < str2.length; i++) {
  str3 += str2[i];
  console.log(str3);
}
