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