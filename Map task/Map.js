//1.Write a function squareNumbers(arr) that returns a new array
// where each number in the original array is squared using map method.
//**Method1  */
let arr1=[1,2,3,4,5]
var sqr=arr1.map( function (a){
    return a**2
})
console.log(`The squares of given number`,sqr);
//**Method 2 */
let arr2=[2,3,4,5,6,7]
let sqrnum=arr2.map((b)=>{return b**2})
console.log(`The square numbers is `,sqrnum);





// 2.Write a function toUppercase(arr) that returns a new array where each
//  string in the original array is converted to uppercase using map method.
//**Method1 */
let str=["html","css","javascript","bootstrap"];
let changecase=str.map(word => {return word.toUpperCase()})
console.log(`The array elements to chnaged to `,changecase);

//**Method 2 */

let str2=["java","python",'sql','aws','react']
let captial=str2.map(captialword=>{return captialword.toUpperCase()})
console.log(`The elements turned into `,captial);
