// test("Check if test works.", () => {
//   console.log("I am working...!")
// })

/* 
how to import from a real/testdriven function somewhere in your SRC:
const add = require('../index').add; 
or destructured: 
const { add } = require('../index')
*/

function add(num1, num2) {
  //   console.log("I exist but I don't do anything")
  return num1 + num2
}

test("The add function adds two numbers and returns the sum.", () => {
  // Arrange
  const number1 = 5
  const number2 = 10
  // Act
  const sum = add(number1, number2)
  // Assert
  expect(sum).toBe(15)
})

function findByName(names, user) {
  //   console.log("I exist but I don't do anything")
  // itereer over de array met For loop
  // vergelijk de name van iedere entry met de user die we zoeken
  // als de namen overeenkomen, moet het hele object terugggegeven worden
  //   console.log(names, user)
  for (let i = 0; i < names.length; i++) {
    // console.log("Users one by one: ", names[i])
    // make a constant of the current object
    const currentUser = names[i]
    console.log(currentUser.name)
    if (currentUser.name === user) {
      console.log("you found something")
      // return entire object
      return currentUser
    }
  }
  return null
}

test("The findByName function will return an object from an array with the specified name.", () => {
  // Arrange
  const usernames = [
    { name: "Sheherazade", id: 1 },
    { name: "Klaas", id: 2 },
    { name: "Priscilla", id: 3 },
    { name: "Quinn", id: 4 },
  ]
  const userToFind = "Klaas"

  // Act
  const result = findByName(usernames, userToFind)

  // Assert
  //   expect(result).toBe({ name: "Klaas", id: 2 }) ===>>> geeft 'reference identity' error, doordat de toBe functie exact hetzelfde object vindt,
  // maar een boject is steeds aan andere "instanbtie"/instance
  // dus moeten we een fucntie gebruiken die zegt: deze 2 objecten moeten 'gelijk' zijn aan elkaar maar niet hetzelfde
  expect(result).toEqual({ name: "Klaas", id: 2 })
})

// nu passen alle testes, maar wat als we willen testen wat er gebeurt als we een gebruiker hebben die we niet kunnen vinden?
// we willen niet dat de app crasht
// niewue test:

test("The findByName function returns null if a user is not found", () => {
  // Arrange
  const usernames = [
    { name: "Sheherazade", id: 1 },
    { name: "Klaas", id: 2 },
    { name: "Priscilla", id: 3 },
    { name: "Quinn", id: 4 },
  ]
  const userToFind = "Jiro"

  // Act
  const result = findByName(usernames, userToFind)

  // Assert
  // wat er gebeurt als we een gebruiker hebben die we niet kunnen vinden
  expect(result).toBeNull
})
