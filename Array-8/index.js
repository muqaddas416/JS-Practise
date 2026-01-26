// simple array vs constructor arrays

// let arr = [20];
// console.log(arr);

// let cArr = new Array(20).fill("muqaddas")
// console.log(cArr);

// console.log(arr.length);
// console.log(cArr.length);

// console.log(typeof arr)

// arrays are mutable 

// let arr = [1,2,3,4,5];
// console.log(arr[3]);
// console.log(arr[2]);
// arr[5] = 100;
// console.log(arr);

// array me kon sa method ap ko new array bana ka dy raha hy or kon sa usy me he change ar raha hy 

// array with loop

// let arr = [1,6,77,9,10];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
   
// }
//  console.log(arr.length)
            //    1push
// array push method add something in the array at end and
//  also give us the new lenth its cange the original array
// ye new lenth return karta hy 

        // 0 1   2        3 4 5
// let arr = [1,2,"muqaddas",8,9,10];
// console.log(arr);
// let a= arr.push(888);
// console.log(a,arr)

/////     2pop 
// array pop method remove array from end
// ye pop kya hoa element return karta hy 
// let b= arr.pop();
// console.log(arr,b);
////   3 unsift 
// ye array ka shuru me elemt place karta hy 

// let c=arr.unshift(0);
// console.log(arr,c)
//     4 shift
// ye array ka shuru sa elemt ko remove karta hy 

// let d=arr.shift();
// console.log(arr,d);

// 5slice 
// ye b ap ko array ka aik slice return karta hy or end wala index chor deta hy 
// let newArr=arr.slice(1, 3);
// console.log(newArr)

// 6splice method of array
// it can add delete and insert in array  and its change the original array

// arr.splice(2, 4)
// console.log(arr)

//    7 concate
// its give us new array ye orijinal array ko change nahi karta 

// let arr2 = ["arhum"];
// let arr3 = ["444"];

// let newArr= arr.concat(arr2,arr3);
// console.log(newArr);

// the other method is that you can also use spread operators
// let newArr = [...arr,...arr2,...arr3]
// console.log(newArr)


// join method is used to join the array and convert it in to string
// and it give us a new strin

// let fruits = ["apple","mango","banana","guava","mango"]
// let test = fruits.join(" % ");
// console.log(test);
// console.log(typeof test)
// include method is same like in a string ye check karna ka lia ka ye is me hy ka nahi 
// you must give proper spel for checking

// let bolesn =fruits.includes("apples");
// console.log(bolesn);

// to String method in arra just only convert array in to string
// let str =fruits.toString();
// console.log(str);
// indexof find the elemnt present in the given array or not
// console.log(fruits.indexOf("banana"))
// reverse function just reverse the array
// fruits.reverse();
// console.log(fruits);

// find methd in array take function to match the elememt

// let test= fruits.find((item)=>{
//   return item === "mango"
// });
// console.log(test)

// flat array can flat the sub array and merge and spread like one when you flat it 
// it return us a new array

// let subArray = ["mu","noor",["ali","fatima",["samavia","ramazan"]]];
// let newArr = subArray.flat(2);
// console.log(newArr);

/////////////////////////////////////Sorting or functional methods or array////////////////////////
//  map method gives you the new array it take a function

// let arr = [1,2,3,4];
// let newArr= arr.map((item,index,arr)=>{
//     return item*2;

    // console.log(item,index,arr)
// })
// console.log(newArr)

/// filter method is just give you a true false value it use when you make a decision
// it give you your array and data doesnot change any thing 

// let filter = [1,3,10,9,8];
// let test = filter.filter((item)=>{
//     return item%2 === 0;
// })
// console.log(test);

// redues method n javascript
// reduce() array ke sab elements ko mila kar ONE value bana deta hai
// (jese sum, total, average, object, etc.)

// let number = [1,2,3,4];
// let result = number.reduce((preVal,currVal)=>{
//     return preVal + currVal;
// })

// console.log(result);

// how to count an average of a student by using redues method

// let marks = [1,2,3,4,5];

// let result=marks.reduce((prev,crr)=>{
//     return prev + crr ;
// })

// let average = result/marks.length
// console.log(`Total=${result}`)
// console.log(`Average=${average}`)

// let n= 25;
// let newArr = new Array(n).fill(0);
// console.log(newArr);
