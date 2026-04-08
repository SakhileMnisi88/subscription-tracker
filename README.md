# Subscription Tracker API

A backend API for managing personal subscriptions such as streaming and recurring services. Such that one should never forget a running subscription.

---

## Status

This project is currently under development. Functionality and structure are subject to change.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB

---

## Purpose

The API is designed to provide a centralized way to create, manage, and track subscription data.

---

## Security

The following security measures are being implemented:

* Password hashing using bcrypt
* Token-based authentication using JSON Web Tokens (JWT)
* Protected routes with authentication middleware
* Input validation and sanitization
* Secure environment variable management
* HTTP security headers (e.g., Helmet)
* Rate limiting to prevent abuse

---

## Running the Project

```bash
npm install
npm run dev
```
