# User Management REST API

A simple REST API built with Node.js and Express for managing user data. This project demonstrates basic CRUD operations and can serve as a starting point for learning backend development.

## Features
- **Create a User:** Add a new user to the database.
- **Read Users:**
  - Retrieve all users.
  - Retrieve a specific user by their ID.
- **Update a User:** Modify details of an existing user.
- **Delete a User:** Remove a user from the database.

## Prerequisites
Before running this project, make sure you have:
- [Node.js](https://nodejs.org/) installed (v14 or higher recommended).
- [npm](https://www.npmjs.com/) (comes with Node.js).

## Endpoints
Here are the available API endpoints:

### Get All Users
**GET** `/users`  
Retrieves a list of all users.

---

### Create a User
**POST** `/users`  
Adds a new user to the database.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
}
```

**Response:**
```
User with name John added to the database
```

---

### Get a User by ID
**GET** `/users/:id`  
Retrieves a specific user by their unique ID.

**Response:**
```json
{
  "id": "1234-5678-9012",
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
}
```

---

### Update a User
**PATCH** `/users/:id`  
Updates details of a specific user.

**Request Body (optional fields):**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "age": 25
}
```

**Response:**
```
The user with ID 1234-5678-9012 is updated successfully
```

---

### Delete a User
**DELETE** `/users/:id`  
Removes a user from the database.

**Response:**
```
The user with ID 1234-5678-9012 was successfully deleted
```

---
## Future Improvements
- Add input validation to ensure required fields are present.
- Include error handling for non-existent users.
- Enhance the project with a database integration.
