const tinderUser = new Object()
 

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

 //console.log(tinderUser)


 const regularUser = {
    email:"same@gmail.com",
    fullname: {
        userfullname: {
            firstname: "santosh",
            lastname: "singh"
        }
    }
 }

 //console.log(regularUser.fullname)
  

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}

const obj3 =  Object.assign({}, obj1, obj2) //{} it is given so that we get the guranteed result
console.log(obj3)

obj4 = {...obj1, ...obj2};
console.log(obj4)

const users = [
    {
        id: 1,
        email:"abc@gmail.com"
    },
    {
        id: 1,
        email:"abc@gmail.com"
    },
    {
        id: 1,
        email:"abc@gmail.com"
    },
    {
        id: 1,
        email:"abc@gmail.com"
    }
]

// to acess this users[1].email

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'))