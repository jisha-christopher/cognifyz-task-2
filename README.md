# cognifyz-task-2
Node js
# Task 2: Inline Styles, Basic Interaction, and Server-Side Validation

## 📌 Objective

This task focuses on enhancing a basic web application by using inline styles, adding client-side interactions, implementing server-side validation, and temporarily storing validated user data on the server.

---

## 🛠️ Technologies Used

* HTML
* Inline CSS
* Inline JavaScript
* Node.js
* Express.js

---

## 📂 Project Structure

```
task2-validation/
│
├── server.js
├── package.json
└── public/
    └── index.html
```

---

## ✨ Features Implemented

### 1️⃣ Extended HTML Form

* User registration form with fields:

  * Name
  * Email
  * Age
* Styled using inline CSS for a clean and simple UI.

### 2️⃣ Client-Side Validation (Inline JavaScript)

* Ensures:

  * Name is not empty
  * Email contains `@`
  * Age is 18 or above
* Displays error messages instantly without refreshing the page.

### 3️⃣ Server-Side Validation

* Validates all form fields again on submission.
* Prevents invalid or manipulated data from being stored.

### 4️⃣ Temporary Server-Side Storage

* Stores validated user data in an in-memory array on the server.
* Demonstrates how backend storage works before using a database

---

## 👩‍💻 Author

**Jisha Christopher**

---

Feel free to fork, clone, and enhance this project 🌟
