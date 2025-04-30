# Hotel-Booking-Site

# Project1
  A web application built with Express.js and MongoDB.
  
# Description
  This project is a Node.js web application that uses Express.js as the web framework and MongoDB (via Mongoose) for data persistence. It implements server-side templating with EJS, form validation with   Joi, and includes development tools like Nodemon for an improved developer experience.
  
# Features
  Express.js backend server
  MongoDB database integration via Mongoose
  EJS templating with EJS-Mate layouts
  Input validation with Joi
  HTTP method override for RESTful routing
  Auto-reloading development server with Nodemon

# Installation

  Clone the repository:

  git clone https://github.com/yourusername/project1.gitcd project1

# Install dependencies:

  npm install

  Make sure MongoDB is installed and running on your machine
  Start the development server:

  npx nodemon
  
# Dependencies

  Express - Fast, unopinionated, minimalist web framework for Node.js
  Mongoose - MongoDB object modeling tool
  EJS - Embedded JavaScript templating
  EJS-Mate - Express 4.x layout, partial and block template functions for the EJS template engine
  Joi - Schema description language and data validator
  Method-Override - Override HTTP verbs
  Nodemon - Monitor for changes and automatically restart server

# Project Structure
  project1/
  ├── node_modules/
  ├── models/           # Mongoose models
  ├── views/            # EJS templates
  │   ├── layouts/      # EJS layouts
  │   ├── partials/     # EJS partials
  ├── public/           # Static assets
  │   ├── css/
  │   ├── js/
  │   ├── images/
  ├── routes/           # Express routes
  ├── utils/            # Utility functions
  ├── app.js            # Main application file
  ├── package.json
  ├── package-lock.json
  └── README.md
  
# Usage
  After starting the server, you can access the application at http://localhost:3000 (or whichever port you configure).
  
# Development
  This project uses Nodemon for development, which automatically restarts the server when file changes are detected.
  npx nodemon
