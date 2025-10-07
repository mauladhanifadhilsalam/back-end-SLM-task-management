# back-end-SLM-task-management

Backend API for SLM Task Management System built with Node.js and Express.

## Prerequisites

- Node.js (v20.x or higher)
- npm (v10.x or higher)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mauladhanifadhilsalam/back-end-SLM-task-management.git
cd back-end-SLM-task-management
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the server:
```bash
npm start
```

For development with auto-reload (Node.js v18+):
```bash
npm run dev
```

The server will start on `http://localhost:3000` by default.

### Available Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

### Configuration

You can configure the server port by setting the `PORT` environment variable:
```bash
PORT=8080 npm start
```

## Project Structure

```
back-end-SLM-task-management/
├── src/
│   ├── app.js          # Express application setup
│   └── server.js       # Server entry point
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express** (v5.1.0) - Web framework

## License

ISC
