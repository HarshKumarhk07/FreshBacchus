# Fresh Produce Landing Page

Modern animated business landing page for Rameshwar Enterprises (Wait, no, for Fresh Produce Shop in Bacchus Marsh).

## Folder Structure
```
project-root
│
├── client (React + Vite, TailwindCSS, Framer Motion)
└── server (Express, MongoDB, Nodemon)
```

## Environment Variables
Create a `.env` file in the `server` directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/freshproduce
```

## Commands to Run the Project
To run the project, open two separate terminals.

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

You can also seed testimonials for testing using the endpoint:
`POST http://localhost:5000/api/testimonials/seed`
