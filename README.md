#  AutoRent Premium Management System

A sleek, full-stack web application for managing a car rental fleet. This system features user authentication, role-based access control, and a dynamic car catalog integrated with MongoDB.

##  Key Features

* **User Authentication**: Secure Login and Registration system using JWT (JSON Web Tokens).
* **Role-Based Access**:
    * **User**: Browse the fleet and initiate rental requests.
    * **Admin**: Access a private dashboard to add or delete cars from the database.
* **Smart Fallback System**: Automatically assigns high-quality images and realistic pricing if specific data is missing in the database.
* **Responsive UI**: A modern interface built with the Montserrat font and a clean "Premium" aesthetic.

## Tech Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript (SPA logic).
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB (Mongoose ODM).
* **Security**: Bcrypt for password hashing and JWT for session management.

##  Running the App

### 1. Prerequisites
* Node.js installed on your machine.
* MongoDB running locally (default port 27017).

### 2. Installation
Open your terminal in the project root and run:
npm install express mongoose jsonwebtoken bcrypt cors

### 3. Start the Server
Run the command: node server.js
Open your browser and navigate to: http://localhost:3000

## Smart Logic Details
The application includes a "Smart Logic" layer to ensure the fleet always looks great, even with incomplete data:

* Tesla Recognition: If a car model contains "Tesla" or "3", the system automatically provides a Tesla Model 3 image and a $150/day price tag if left empty.
* BMW Recognition: Models containing "BMW" or "X5" automatically pull a professional BMW image and a $123/day price tag.
* Data Integrity: The system seamlessly handles both price and pricePerDay fields to maintain compatibility with different MongoDB document structures.

##  Project Structure
* server.js – Main entry point and API route configuration.
* public/index.html – The entire frontend UI and client-side logic.
* models/ – Mongoose schemas for Users and Cars.
* routes/ – API endpoints for Auth and Fleet management.

