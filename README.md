# CodeQuest: Mentor Slot Selection Platform

CodeQuest is a full-stack web application designed to connect users (e.g., students, learners) with mentors for guidance, Q&A, and scheduled sessions. It provides a platform for mentors to offer their expertise and for users to easily find and book slots with them.

## Key Features

*   **Dual User Roles:** Separate registration and login flows for Users and Mentors.
*   **Authentication:**
    *   Standard email/password registration and login.
    *   Secure password hashing (bcryptjs).
    *   JSON Web Token (JWT) for session management.
    *   Google OAuth 2.0 for quick sign-in/signup for both users and mentors.
*   **Mentor Profiles:** Mentors can set up profiles showcasing their expertise, availability, and other relevant information.
*   **User Profiles:** Users have profiles to manage their information and activity.
*   **Batch/Slot Management:**
    *   Mentors can create and manage batches or time slots.
    *   Users can view available slots and join/book them.
*   **Scheduling:** Integrated scheduling capabilities to view and manage appointments (potentially using `@bitnoi.se/react-scheduler`).
*   **Resource Section:** A dedicated area for sharing learning materials or resources.
*   **Contact System:** Functionality for users to get in touch or ask questions.
*   **Responsive Design:** User interface designed to work across various devices.

## Tech Stack

**Frontend:**

*   **UI Library/Framework:** React.js
*   **State Management:** Redux with Redux Thunk (for managing complex application state and asynchronous operations)
*   **Routing:** React Router DOM (for client-side navigation)
*   **HTTP Client:** Axios (for making API requests to the backend)
*   **Styling:**
    *   Standard CSS (`App.css`, `index.css`)
    *   Tailwind CSS (utility-first CSS framework - listed in dev dependencies)
    *   Font Awesome (for icons)
*   **Build Tool:** Create React App (React Scripts)

**Backend:**

*   **Runtime Environment:** Node.js
*   **Framework:** Express.js (for building robust APIs)
*   **Database:** MongoDB (NoSQL document database)
*   **ODM:** Mongoose (for modeling application data and interacting with MongoDB)
*   **Authentication:**
    *   `jsonwebtoken` (for creating and verifying JWTs)
    *   `bcryptjs` (for password hashing)
    *   `google-auth-library` (for Google OAuth server-side verification)
*   **Middleware:** `cors` (for enabling Cross-Origin Resource Sharing)
*   **Environment Variables:** `dotenv` (for managing configuration)

**Deployment:**

*   The project includes configuration (`server/vercel.json`) suggesting readiness for deployment on platforms like Vercel or Render.
*   The server is configured to serve the static client build for production environments.

## Project Structure

The repository is organized into two main directories:

*   `client/`: Contains the React frontend application.
*   `server/`: Contains the Node.js/Express.js backend API.

Each directory has its own `package.json` for managing dependencies and scripts.

## Setup and Installation (Development)

To get the project running locally, follow these steps:

**Prerequisites:**

*   Node.js (v14 or later recommended)
*   npm (Node Package Manager) or yarn
*   MongoDB (a local instance or a cloud-hosted version like MongoDB Atlas)

**1. Clone the Repository:**

```bash
git clone <repository-url>
cd <repository-directory>
```

**2. Backend Setup:**

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory with the following variables:

```env
MONGODB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=5000  # Or any port you prefer for the backend
GOOGLE_CLIENT_ID=<your_google_oauth_client_id> # For backend verification if needed
```

Run the backend server:

```bash
npm run dev
```

The backend server should now be running (typically on `http://localhost:5000`).

**3. Frontend Setup:**

```bash
cd ../client # Navigate back to the root and then into the client directory
npm install
```

Create a `.env` file in the `client/` directory with the following variables:

```env
REACT_APP_GOOGLE_CLIENT_ID=<your_google_oauth_client_id_for_frontend>
REACT_APP_SERVER_URL=http://localhost:5000 # URL of your backend server
```

Start the frontend development server:

```bash
npm start
```

The frontend application should now be running (typically on `http://localhost:3000`) and will connect to your local backend.

## API Endpoints

The backend exposes RESTful APIs for various functionalities, including:

*   `/user/*`: User authentication and profile management.
*   `/mentor/*`: Mentor authentication, profile, and batch management.
*   `/batches/*`: Batch listing and interaction.
*   `/join/*`: Endpoints related to users joining batches or sessions.

Refer to the route definitions in `server/routes/` and controller logic in `server/controller/` for more details.

---

This README provides a comprehensive overview of the CodeQuest project, its features, technology stack, and setup instructions.
