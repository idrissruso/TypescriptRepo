//select the text eleemnt by şd

interface User {
  name: string
  age: number
  occupation: string
  password: string
  sons?: User[]
}

const user: User = {
  name: 'John Doe',
  age: 30,
  occupation: 'gardener',
  password: 'johndoe1234',
}

const user2: User = {
  name: 'John Doe',
  age: 30,
  occupation: 'gardener',
  password: 'johndoe1234',
  sons: [user],
}

console.log(user2)
