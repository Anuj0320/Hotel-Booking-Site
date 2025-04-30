# Hotel-Booking-Site
Project1
A web application built with Express and MongoDB.
Description
This project is a Node.js web application using Express framework with MongoDB as the database. It features EJS templating for server-side rendering and includes form validation with Joi.
Technologies Used

Express: Web application framework
Mongoose: MongoDB object modeling tool
EJS & ejs-mate: Templating engines for HTML generation
Joi: Schema validation library
Method-override: Middleware for HTTP method handling
Nodemon: Development tool for auto-restarting server

Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Set up your MongoDB connection (details to be added)

Running the Application
Start the development server:
npx nodemon index.js
The server will restart automatically when file changes are detected.
Project Structure
project1/
├── node_modules/
├── models/        # Mongoose models
├── routes/        # Express routes
├── views/         # EJS templates
├── public/        # Static files
├── index.js       # Application entry point
└── package.json   # Project dependencies
