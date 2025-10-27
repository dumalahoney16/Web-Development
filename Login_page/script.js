let firstName = "Your First Name";
let lastName = "Your Last Name";
let age = 25;
let occupation = "Your Occupation";
let hobbies = ["reading", "coding", "gaming"];

function displayPersonalInfo() {
  document.getElementById("name").textContent = `Name: ${firstName} ${lastName}`;
  document.getElementById("age").textContent = `Age: ${age} years old`;
  document.getElementById("occupation").textContent = `Occupation: ${occupation}`;
  document.getElementById("hobbies").textContent = `Hobbies: ${hobbies.join(", ")}`;
}

displayPersonalInfo();
