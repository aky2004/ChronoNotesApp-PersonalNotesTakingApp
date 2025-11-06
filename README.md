# ChronoNotesApp - YourPersonalNotesTakingApp

ChronoNotesApp is a full-stack note-taking application that allows users to register, login, create, edit, and delete notes. The project consists of a Node.js/Express backend API and a React frontend built with Vite.

## Features

- User authentication (register, login)
- Create, read, update, and delete notes
- Responsive and user-friendly interface
- State management with Redux Toolkit
- Protected routes for authenticated users

## Technologies Used

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing
- dotenv for environment variables
- cors and cookie-parser middleware

### Frontend

- React 18
- Vite build tool
- React Router DOM for routing
- Redux Toolkit for state management
- Axios for API requests
- Bootstrap for styling
- React Hot Toast for notifications
- React Icons

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- MongoDB instance (local or cloud)

## Installation

### Backend

1. Navigate to the Backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory and add your environment variables, for example:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Frontend

1. Navigate to the Frontend directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

### Backend

From the Backend directory, start the backend server:

```bash
npm run dev
```

The backend server will start on the port specified in your `.env` file (default is 5000).

### Frontend

From the Frontend directory, start the frontend development server:

```bash
npm run dev
```

The frontend will start and open in your default browser (usually at `http://localhost:5173`).

## Folder Structure

```
ChronoNotesApp/
├── Backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── index.js
│   ├── package.json
│   └── ...
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Redux/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── package.json
│   ├── vite.config.js
│   └── ...
└── README.md
```

## Usage

- Register a new user account.
- Login with your credentials.
- Create, edit, and delete notes.
- Enjoy a seamless note-taking experience.

## License

This project is open source and available under the MIT License.
