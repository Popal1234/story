//Maping to create a new array
// pasted one function in an other function, deleted function name,  add arrow function, delete return and {}, 
var numbers = [1,3,5,7,9];
var a = numbers.map(x=>x * 2)
console.log(a)

var numbers = [1,3,5,7,9];
function double(x){
    return (x*2);
}
var b = numbers.map(double)
console.log(b)






























// // or Arrow function square it?
// var arrowFun = numbers.map(x=>x * x)
// console.log(arrowFun)

// // Filter: create a new array that keep the item with return ture
// const newNum = numbers.filter(function(num){
//     return num>4
// });
// console.log(newNum)
// //make it arrow function
// const newNumber = numbers.filter((num1)=>num1>5);
// console.log(newNumber)

// // find to find the first item that matches from an array
// var b = numbers.find(function(x){
//     return x>4;
// })
// console.log(b)
































