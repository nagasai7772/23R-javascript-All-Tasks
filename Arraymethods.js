//---------------at,concat------------------------
// var x=[1,2,3,4];
// console.log(x.at(-1));
// console.log(x.at(6));
// console.log(x.at(2));
// var y=x.at(-2);
// console.log(y);
// var cart=["Apple","Orange","Banana","Grapes"];
// var cart1=cart.at(0);
// var cart2=cart.at(1);
// console.log("Adding items to cart "+cart1, cart2);
// var subjects=["Maths","English"," Telugu"];
//  var result=["Pass","fail","improve"];
//  var marks=[25,65,45];
// console.log(subjects[0].concat(marks[0]),subjects[1].concat(marks[1]),subjects[2].concat(marks[2]));
// console.log("Grades You Gained");
// console.log(subjects[0].concat(marks[0],result[1]),subjects[1].concat(marks[1],result[0]),subjects[2].concat(marks[2],result[2]));
//------------------------------------//push()-------------------
// var cars=["Benz","Audi","Ferrari"];
// var newcar=cars.push("Tata","BMW");
// console.log(cars.push("MG"))
// console.log(newcar,cars);
// var petrol=[96,68,78,99];
// console.log(petrol);
// var newprice=petrol.push(65,98,89);
// console.log(petrol);
// var show=petrol.at(5);
// console.log("New prices of petrol is "+show );
// var car=["car1","car2"];
// add= car.push("car3");
// console.log(add);

////////////////////////////////////////////////////////////pop()////////////////////////////////////////////////

// var alpha=['a','b','c','d'];
// alpha.pop();
// console.log(alpha);
// var removed=alpha.pop();
// console.log("Removed Alpha",removed);
//  var numbers=[1,2,3,4,5];
//  var numremoved=numbers.pop();

//  console.log("Removednumber",numremoved,"Lengthofarray",numbers.length);
// var nested=[1,2,["hello",[5,6,["hi"]]]];
// var poped=nested.pop();
// console.log(nested," ",poped);

// var digit=[10];
// digit.pop();
// console.log(digit);

/////////////////////////////Adding elements in empty string///////////////////
// var mileage=[];
// mileage [mileage.length]=4;
// mileage [mileage.length]=5;
// mileage [mileage.length]=6;
// console.log(mileage);
// var key=[];
// key[0]="killer";
// key[3]="KIte";
// key[1]="nikmal";
// console.log(key);
// console.log(key.length);
///////////////////////////////////////shift()/////////////////////

// var num=[1,2,3,4];
// num.shift();
// console.log(num);
// removedshift=num.shift();
// console.log("REmoved shift is =",removedshift);

// var planes=[1,"Kingfisher",2,"Royal"];
// var shiftedplane=planes.shift();
// console.log(shiftedplane,planes.length,planes);

// var nest=[[1,2],[2,3],[3,4]];
// nest.shift();
// console.log(nest);


/////////////////////////////////////tostring()////////////////////////////////////

// var numbers=[1,2,3,4];
// string=numbers.toString();
// console.log(string);
// var mixed=[1,"apple",true,"null"];

// mix=mixed.toString();
// console.log(mixed.join(','));
// var empty=[""];
// change=empty.toString();
// console.log(change);

// var fruits=["apple","banana","cherry"];
// changed=fruits.toString();
// console.log(changed);
// var nested2=[[1],[2],[3],[4]];
// merge=nested2.toString();
// console.log(merge,);
// var thing='Hello world memory one giga byte';
// split=thing.split(" ",2);
// console.log(split);
// var mobile='iphone is an costliest mobile';
// split2=mobile.split("an");
// console.log(split2);
/////////////////////////////////////charAt()/////////////////////
// var char="welcome";
// console.log(char.at(2));
// console.log(char.at(-3));
// console.log(char.charAt(5));
// console.log(char.charAt(-2));//if we negative values to charAt() it gives an empty string.  
// console.log(char.charAt(char.length-7));

// var name="HELLO";
// console.log(name.charAt(0));

// var course="Javascript is a language";
// console.log(course.charAt(14));

// var car="Benz";
// console.log(car.charAt(5));//if we out of range value ti charAt() it gives an empty string
/////////////////////////CharCodeAt()//////////
// var bike="BMW is a Racing bike";
// console.log(bike.charCodeAt(2));//We giving index value to this charCodeAt()

// var flower='Rose is a Rose';
// console.log(flower.charCodeAt(flower.length-1));
// console.log(flower.charCodeAt-6);
///////////////////Split()///////////
// var code=["Hello", "world"];
// joined=code.join(" " );
// split=joined.split(" " );
// console.log(split);

// var alpha=["a","b","c"];
// jointhis=alpha.join(" ");
// splitthis=jointhis.split(" ");
// console.log(splitthis);

// var sub="hello";
// var sub2=sub.split();
// console.log(sub2);

// -------------------------------------------------------------------To Print only numbers & strings in mixed array---------------------------------------------------------------------


// var arr=[1,2,3,"hello","str"];
// var arr1=arr.filter(Number);
// console.log(arr1)

// var  arr2=["a","b","c",1,2,3];
// var str=arr2.filter(isNaN);
// console.log(str);

// var names=["Krishna","Rakesh","Mukesh",66,96,88];
// var names1=names.filter(isNaN);
// var num=names.filter(Number);
// console.log(names1);
// console.log(num);
// console.log(names.length);
// console.log(names[names.length-1])
// console.log(typeof names);
// var num=[1,2,3,4,5];

// console.log(num[0]);
// console.log(num[-1]);//In arr[] it doesn't accept negative values& gives output as undefined
// console.log(num.at(4));
// console.log(num.at(-2));//It accepts negatives by giving these type of '()' notation
// console.log(num.at[-2]);//In at[] it doesn't accept negative values& gives output as undefined

// var car=["Benz","Audi","Tata"];
// var car2=car.indexOf("Audi");
// console.log(car2);

// var bike=[66,55,96,66,52,31,36];
// var bike2=bike.lastIndexOf(66);// it prints the index number of last element
// console.log(bike2);

// var alpha=["a","b","c","a","c","a","c"];
// var alpha1=alpha.lastIndexOf("a");
// var alpha2=alpha.lastIndexOf(6);
// console.log(alpha1);
// console.log(alpha2);

