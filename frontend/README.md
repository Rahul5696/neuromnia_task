Neuromnia Task
This project is a full-stack application setup with separate frontend and backend folders, managed through npm scripts and concurrently for running both simultaneously in development mode.

Project Structure
Frontend: Contains the frontend code, typically a React application.
Backend: Contains the backend server code, using Express.
Requirements
Node.js installed on your system
Installation
Clone this repository:

bash
Copy code
git clone https://github.com/your-username/neuromnia_task.git
cd neuromnia_task
Install dependencies:

bash
Copy code
npm install
Install dependencies for frontend and backend individually if needed:

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Scripts
Frontend: To start the frontend application only.

bash
Copy code
npm run frontend
Backend: To start the backend server only (with nodemon for automatic restarts).

bash
Copy code
npm run backend
Dev: To run both frontend and backend simultaneously using concurrently.

bash
Copy code
npm run dev
Dependencies
Concurrently: Manages running multiple npm scripts concurrently in one terminal.
Cors: Middleware for enabling CORS in Express.
CSV-Parser: Used for handling CSV data parsing.
Express: Backend framework for building RESTful APIs.
Express-Rate-Limit: Middleware for rate-limiting API requests.
Nodemon: Utility for monitoring and restarting the server on file changes.
Author
Swagat Ranjan Baral

License
This project is licensed under the ISC License.

