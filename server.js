const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Temporary server-side storage
let users = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const { name, email, age } = req.body;

  // Server-side validation
  if (!name || !email || !age) {
    return res.send("All fields are required!");
  }
  if (!email.includes("@")) {
    return res.send("Invalid email format!");
  }
  if (age < 18) {
    return res.send("Age must be 18 or above!");
  }

  // Store validated data
  users.push({ name, email, age });

  res.send(`
    <h2>Registration Successful</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Age: ${age}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
