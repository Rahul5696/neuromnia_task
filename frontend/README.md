**## neuromnia_task**

**Description:**

This project is a full-stack application setup with separate frontend and backend folders, managed through npm scripts and `concurrently` for running both simultaneously in development mode.

## Project Structure

- **Frontend**: Contains the frontend code, typically a React application.
- **Backend**: Contains the backend server code, using Express.

## Requirements

- Node.js installed on your system

**Installation:**

1. Clone this repository:

   ```bash
   git clone https://github.com/Rahul5696/neuromnia_task.git
   ```

2. Install project dependencies:

   ```bash
   cd neuromnia_task
   npm install
   ```
3. Install project dependencies:

   ```bash
   cd neuromnia_task/frontend
   npm install
   ```

**Usage:**

The project provides scripts to run the frontend and backend components separately or concurrently for development:

* **Start the frontend:**

   ```bash
   npm run frontend
   ```

* **Start the backend:**

   ```bash
   npm run backend
   ```

* **Run both frontend and backend concurrently (for development):**

   ```bash
   npm run dev
   ```

**Author:**

Swagat Ranjan Baral

**License:**

ISC

**Dependencies:**

* concurrently@^9.0.1
* cors@^2.8.5
* csv-parser@^3.0.0
* express@^4.21.1
* express-rate-limit@^7.4.1
* nodemon@^3.1.7

**Contributing:**

**(Optional) If you want to encourage contributions, provide instructions on how to get involved.**
