# Login Application (React + Node.js)

## Overview

This project is a simple full-stack login application built using **React** for the frontend and **Node.js with Express** for the backend.

The application allows users to log in with a username and password. If the credentials are correct (`admin/admin`), the user is redirected to a welcome page. If the credentials are incorrect, an error message is displayed.

The application also remembers the username after a successful login using local storage.

---

## Features

* Login page with username and password fields
* Backend API for login validation
* Navigation to welcome page on successful login
* Error message for invalid credentials
* Username stored in local storage for future logins
* React functional components and hooks
* Proper HTTP status codes

---

## Tech Stack

Frontend:

* React
* React Hooks
* React Router
* Axios

Backend:

* Node.js
* Express
* CORS

---

## Project Structure

login-app
│
├── backend
│   └── server.js
│
└── frontend
├── src
│   ├── App.js
│   ├── Login.js
│   ├── Welcome.js
│   └── api.js

---

## Installation and Setup

### 1. Clone th
