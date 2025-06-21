# ✅ Todo API

This is a simple Todo API built with Node.js, Express, and MongoDB, designed to be the backend for a full-stack application.

**Note:** The frontend for this application is currently under development. 🚧

## ✨ Features

- ✅ Create, read, update, and delete todos
- 💾 Uses MongoDB for data storage
- 🚀 Simple and easy-to-use RESTful API

## 🛠️ How to Run on Your System

Follow these steps to get the backend server running on your local machine.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: This project requires a MongoDB database. You can use a local installation or a cloud service like MongoDB Atlas.

### ⚙️ Installation & Setup

1.  **Clone the Repository**
    Open your terminal and run this command:
    ```sh
    git clone https://github.com/sumitksr/TodoApp.git
    ```

2.  **Navigate to the Project Directory**
    ```sh
    cd TodoApp
    ```

3.  **Install Dependencies**
    Run this command to install all the necessary packages:
    ```sh
    npm install
    ```

4.  **Configure Environment Variables**
    Create a file named `.env` in the root of the project directory and add the following lines. You must replace the placeholder values with your own.

    ```env
    # The port number you want the server to run on
    PORT=3000

    # Your MongoDB connection string
    # Example for local DB: mongodb://localhost:27017/your_db_name
    # Example for Atlas: mongodb+srv://<user>:<password>@cluster.mongodb.net/your_db_name
    MONGODB_URI="your_mongodb_connection_string"
    ```

### 🏃 Running the Server

-   **For production:**
    ```sh
    npm start
    ```
-   **For development (with automatic server restart on file changes):**
    ```sh
    npm run dev
    ```

Once running, the API will be available at `http://localhost:3000`.

## 📡 API Endpoints

All endpoints are prefixed with `/api/v1`.

### Create a Todo
- **URL**: `/createTodo`
- **Method**: `POST`
- **Body**:
```json
{
  "title": "My First Todo",
  "description": "This is a description for my first todo."
}
```

### Get All Todos
- **URL**: `/getTodos`
- **Method**: `GET`

### Get a Single Todo by ID
- **URL**: `/getTodos/:id`
- **Method**: `GET`

### Update a Todo
- **URL**: `/updateTodo/:id`
- **Method**: `PUT`
- **Body**:
```json
{
  "title": "Updated Todo Title",
  "description": "This is the updated description."
}
```

### Delete a Todo
- **URL**: `/deleteTodo/:id`
- **Method**: `DELETE` 