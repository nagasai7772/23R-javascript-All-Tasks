// task:
// ------
const products = [
  {
    id: 101,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    inStock: true,
    ratings: 4.5,
  },
  {
    id: 102,
    name: "Laptop",
    price: 1199.99,
    category: "Computers",
    inStock: false,
    ratings: 4.7,
  },
  {
    id: 103,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Accessories",
    inStock: true,
    ratings: 4.3,
  },
  {
    id: 104,
    name: "Smartwatch",
    price: 149.99,
    category: "Wearables",
    inStock: true,
    ratings: 4.2,
  },
  {
    id: 105,
    name: "Gaming Console",
    price: 499.99,
    category: "Gaming",
    inStock: true,
    ratings: 4.8,
  },
];

// 1.Write a function that returns an array of all product names in uppercase.
//**Method1 */
let changecase=products.map((a)=> {return a.name.toUpperCase()})

console.log(changecase);
// //**Method 2 */
let Namechange=products.forEach((a)=>
{let x=a.name.toUpperCase()
    console.log(x);
})

// // 2.Write a function that logs each product's name and price to the console.

let logs = products.map((a) => a.name);
console.log(logs);

// // 3.Write a function that returns an array of products that are in stock.
// //**Method 1 */
let stock=products.map((a)=>{if (a.inStock) {
    return a.inStock
    
}})
// console.log(stock);
// //**Method 2 */
let stocks=products.filter((b)=>{b.inStock
    return b.inStock
})
// // console.log(stocks);
let stockfilter=stocks.map((c)=>{c.inStock 
    return c.name})
console.log(stockfilter);


// 4.Write a function that finds the first product with a rating higher than 4.5

let find=products.find((a)=>{if(a.ratings===4.5) return a.name})
  console.log(find);
  
// 5.Write a function that returns the index of the first product in the "Gaming"


let game=products.findIndex((a)=>{if(a.category==="Gaming")
  return a.id
})
console.log(game);

// 6.Write a function that checks if all products are in stock.

let stok=products.map((a)=>{if(a.inStock)
  return a.inStock
})
console.log(stok);



// 7.Write a function that checks if any product has a price lower than $200.
let check=products.filter((a)=>{if(a.price<200)
  return a.price
})


let check1=check.some((a)=>{
  return a.price
})
console.log(check1);
