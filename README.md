# Subscription Tracker API

> 🚧 Currently under active development.

A RESTful API for tracking and managing personal subscriptions — think Netflix, Spotify, and other recurring services. The goal is to give users a single place to monitor what they're subscribed to, when renewals are due, and how much they're spending.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB

## Planned Features

- User authentication (sign up / sign in)
- Full CRUD for subscriptions
- View all subscriptions per user
- Track upcoming renewal dates
- Cancel subscriptions
- React.js frontend 

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/subscriptions` | Get all subscriptions |
| GET | `/api/v1/subscriptions/:id` | Get subscription details |
| POST | `/api/v1/subscriptions` | Create a subscription |
| PUT | `/api/v1/subscriptions/:id` | Update a subscription |
| DELETE | `/api/v1/subscriptions/:id` | Delete a subscription |
| PUT | `/api/v1/subscriptions/:id/cancel` | Cancel a subscription |
| GET | `/api/v1/subscriptions/upcoming-renewals` | Get upcoming renewals |
| GET | `/api/v1/subscriptions/user/:id` | Get all subscriptions for a user |
| POST | `/api/v1/auth/sign-up` | Register a new user |
| POST | `/api/v1/auth/sign-in` | Sign in |

## Getting Started

## Security

The following security measures are being implemented:

* Password hashing using bcrypt
* Token-based authentication using JSON Web Tokens (JWT)
* Protected routes with authentication middleware
* Input validation and sanitization
* Secure environment variable management
* HTTP security headers (e.g., Helmet)
* Rate limiting to prevent abuse


```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
