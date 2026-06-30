# Notification Application

This project was developed as part of the Affordmed Campus Hiring Assessment.

## Features

- View all notifications
- Filter notifications by type
  - All
  - Placement
  - Result
  - Event
- Loading indicator while fetching data
- Error handling for failed API requests
- Notification cards with type, message and timestamp
- Pagination support
- Logging middleware integrated with the provided logging API

## Project Structure

```
Campus-Evaluation-FS
│
├── logging-middleware
│   └── logger.js
│
├── notification-app-be
│
└── notification-app-fe
    ├── src
    │   ├── api
    │   ├── components
    │   ├── hooks
    │   ├── pages
    │   ├── App.jsx
    │   └── main.jsx
```

## Technologies Used

- React
- Vite
- Material UI
- Axios
- JavaScript

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to the frontend folder

```bash
cd notification-app-fe
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

## Logging Middleware

A reusable logging middleware was implemented using the logging API provided in the assessment.

It supports logging for:
- Backend
- Frontend

Supported log levels:
- debug
- info
- warn
- error
- fatal

## API

The application consumes the Notification API provided in the assessment using Bearer Token authentication.

## Assumptions

- A valid access token is required before making API requests.
- Notifications are fetched from the evaluation server.
- Pagination depends on the API response.

## Author

**Suyash Balsaheb Lahure**

Roll No: **2403051247014**
