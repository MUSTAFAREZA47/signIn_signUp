const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };

person.nationality = "English"

delete person.age

//   for (let i in person) {
//     // console.log(person[i])
//   }

//   myObj = {
//     name:"John",
//     age:30,
//     cars: {
//       car1:"Ford",
//       car2:"BMW",
//       car3:"Fiat"
//     }
//   }

//   for (let carName in myObj.cars) {
//     console.log(myObj.cars)
//   }

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


//   for (let x in myObj.cars) {
//     console.log(myObj.cars[x].name)
//     for (let y in myObj.cars[x].models) {
//         console.log(myObj.cars[x].models[y])
//     }


//   }

// console.log(myObj)
// console.log(JSON.stringify(myObj))

const arr = [6,8,3,4,5];

for (let i of arr) {
    console.log(i)
}