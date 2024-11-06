
// var x=5;
// // x=x+5;
// x++;
// console.log(x);
// ++x;
// console.log(x);
// --x;
// console.log(x);
// x--;
// console.log(x);
// var y=x**3;
// console.log(y);


// var x=4;
// // x++;
// // --x;
// // console.log(x);
// // x--;
// // --x;
// // console.log(x);
// var y=x*2/2;
// y++;
// y--;
// var z=y*6/4*3;
// --z;
// z--;
// z++;
// var a=z**3;
// a--;
// console.log(a);

// var x=8;
// var y=x*2;
// y-=8;

// console.log(y);



// var str="helloWORld";
// var op=""
// for(i in str)
// {
//     if(i%2!=0)
//     {
//         op=op+str[i];
        
//     }
// }
// console.log(op);cls

//  to print only lowercase letters
// var ip="JavaSCRipt"; 
// op="";
// for (i in ip)
// {
//     if(ip[i]==ip[i].toLowerCase())
//     {
//         op=op+ip[i];
//     }  
// }
// console.log(op)


// var str=["good","hi","Hello","Welcome","students","Bye"];
 
// var str1=" ";

// for (x in str)
// {
//     if(str[x]!=str[x].toLowerCase())
//     {
//         str1=str1+" "+str[x]
        
//     }
// }
// console.log(str1);

// var a="hello123"
// var b="";
// for (i in a)
// {
//     if(a[i]==a[i].toLowerCase)
//     {
     
//     }
    
// }
// console.log(a[i]);


var arr=[3,5,10,15,23,22,25,35,56];
var arr1=[];
for (value in arr)
{
    if(arr[value]%5==0)
    {
        arr1.push(arr[value]);
        
    }
}
console.log(arr1);

var str=["html","css","js","react","angular"];
var str1=[];
for (ans in str)
{
    if(ans%2==0)
    {

        str1.push(str[ans].toUpperCase());
        
    }
}
console.log(str1);

var arr=["htmL","csS","javaScripT","react","angulaR","nodE","EXPREss"];
var arr1=[];


for(value in arr)
{                    
        
               if(arr[value].at(-1)==arr[value].at(-1).toUpperCase())                       {
                arr1.push(arr[value]);
                
                
               }
               


               
}
console.log(arr1)

// if(arr[value]!=arr[value].toLowerCase())
//     {
//         console.log(arr[value]);
//     }
