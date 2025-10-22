// JSON data
const student = {
  name: "Saloni Khan",
  age: 22,
  course: "B.Tech Computer Science",
  skills: ["JavaScript", "React", "Python"]
};

// Accessing JSON data in JavaScript
console.log("Student Name:", student.name);
console.log("Course:", student.course);

// Convert JSON object to string
const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
const jsonObject = JSON.parse(jsonString);
console.log("Parsed Object:", jsonObject);
