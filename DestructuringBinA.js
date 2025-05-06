const Animal = {
    Name: "Dog",
    details: {
      color: "blue",
      size: "large"
    }
  };
  
const { details} = Animal;
  
console.log(details.color); // Output: blue
console.log(details.size);  // Output: large
  
Animal.details.color = "red";
console.log(details.color); // Output: red ->ref 
details.color = "green";
console.log(Animal.details.color); // Output: green ->ref