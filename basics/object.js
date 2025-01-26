const mySym = Symbol("key1")

const Jsuser = {
    name: "santosh",
    age: 23,
    location: "baniyawala",
    [mySym]:"mykey1",
    pincode: 248140,
    lastlogin: ["monday","saturday"]
}



Jsuser.greeting = function(){
    console.log("Hello Js user");
}

Jsuser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

// console.log(Jsuser["location"]);
// console.log(Jsuser[mySym]);  //we have to use square bracket to use symbol
// Jsuser.pincode = 242212;  //to overwrite the values
// Object.freeze(Jsuser)    //to freeze the object  now it will not change