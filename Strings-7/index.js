// Strings are immutable, which means once a string is created,
//  its value cannot be changed. Any modification creates a 
// new string instead of changing the original one.

// let str = "   Muqaddas ";
// let toUpperCase = str.toUpperCase();
// let toLowerCse = str.toLowerCase();
// let trim = str.trim();
// console.log(str,toUpperCase,toLowerCse);
// console.log(str)
// console.log(trim)


// let firstName = "Muqaddas";
// let middel = "BIBI"
// let lastName = "iqbal";
// let fullName = firstName + lastName;
// let fullName2 = firstName.concat(lastName,middel)
// console.log(fullName2);

// let str = "I am a girl and i am a good girl";
// let check = str.includes("girl");
// console.log(check);
// console.log(str.indexOf("z"));
// console.log(str.charAt(2));
// console.log(str.replace("girl","Boy"));
// console.log(str.replaceAll("girl", "boy"))

// sice method in string

// let str = "@Muqaddas";
// console.log(str.slice(1,5))

// split method in string
// let str = "alpa beta gamema"
// console.log(str.split("a"));

// Question1

// let giveName = prompt("enter your name");
// let username = `@${giveName.trim().replaceAll(" ","")}${giveName.length}`
// console.log(username)

let str = prompt("Give me a string");
let ch = prompt("now enter character");
let count = 0;
for(val of str){
    if(val.toLowerCase() === ch.toLowerCase()){
        count++

    }
}
console.log(count)