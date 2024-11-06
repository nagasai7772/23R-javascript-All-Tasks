// ***1.write a function to check whether input num is even or odd**

function value() {
  //function definition
  num = 6;
  if (num % 2 == 0) {
    //checking input whether even or not
    console.log(`${num} -is Even Number`);
  } else {
    console.log(`${num} -is Odd Number`);
  }
}

value(); //invoking the function
// ***Method-2*****
function ans(x) {
  //function definition passing parameters
  //**using if else statements  */

  if (x % 2 == 0) {
    //taking value from argument, checking that argument value is even or not
    console.log(`${x} -is Even Number`);
  } else {
    console.log(`${x} -is Odd Number`);
  }
}
ans(1); //passing value through argument

// **Method3**

var a=19;   //taking var as global 
function sol()
{
    if(a%2==0) // checking var is even or not 
    {
        console.log(`${a} is Even Number`)
    }
  else{
    console.log(`${a} is Odd Number`)
  }

}
sol(a) //invoking with the argument "a" var 





// ***2.write a function to check whether input string is palindrome or not***

function string() {
  // function definition
  var str = "malayalam"; //input string
  var str2 = "";
  for (
    i = str.length - 1;
    i >= 0;
    i-- // reversing the input string
  ) {
    str2 += str[i]; //assgining reversed string to str2
  }
  if (str == str2) {
    //comparing the both strings whether palindrome or not
    console.log(`${str2} is palindrome`);
  } else {
    console.log(`${str2} is not palindrome`);
  }
}
string(); //invoking the function

//**Method 2 */

var name="rotator"; //assigning a string to var name
var name2="";
function palin()  // function definition with name 
{


for(i=name.length-1;i>=0;i--)  // reversing the input string
    name2+=name[i]        ////assgining reversed string to name2
if(name==name2)
{
    console.log(`${name2} is a Palindrome`);
    
}
else
{
    console.log(`${name2} is not Palindrome`)
}

}
palin();

// **Method 3**

function values(str1)  // function def/exp with parameter str1
{
    var str2=""  //**  taking an empty string
    for(i=str1.length-1;i>=0;i--)    //**checking string in reverse 
        str2+=str1[i]  /** assgining str2 in str[i] values*/    
        if(str1==str2)   //** Comparing both strings  */
    {
   console.log(`${str2} is palindrome`);
    }
    else
    {
        console.log(`${str2} is Not palindrome`)
    }
}
values("mom")   //invoking & passing arguments to parameters


// **3.write a function to check largest num among three numbers.**

function check() {
  // function definition with name check
  var a = 6;
  var b = 9; //** we assigning variables  here
  var c = 15;
  //* using if else statements to compare a,b,c values*/
  if (a > b && a > c) {
    //*  comapring values a & b & c
    console.log(`${a}: A is Big`);
  } else if (b > c && b > a) {
    //*  comapring values a &b & c

    console.log(`${b}: B is Big`);
  } else if (c > a && c > b) {
    console.log(`${c}: C is Big`); //*  comapring values a &b & c
  }
}
check();

// ***Method2***

function compare(a, b, c) {
  //function defintion with taking parameters
  //* using if else statements to compare a,b,c values*/
  if (a > b && a > c) {
    //*  comapring values a &b & c
    console.log(`${a}: A is Big`);
  } else if (b > c && b > a) {
    //*  comapring values a &b & c
    console.log(`${b}: B is Big`);
  } else if (c > a && c > b) {
    //*  comapring values a &b & c
    console.log(`${c}: C is Big`);
  }
}
compare(12, 16, 10); //passing arguments to parameters & invoking the function
