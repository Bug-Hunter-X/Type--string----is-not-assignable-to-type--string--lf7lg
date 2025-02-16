function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user[0])); // Access the first element

console.log(greeter(user.join(" "))); //Join the array elements