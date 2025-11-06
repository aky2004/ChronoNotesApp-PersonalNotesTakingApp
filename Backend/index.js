import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import DbCon from './config/db.js';
import AuthRoutes from './routes/Auth.js';
import NotesRoutes from './routes/Notes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

DbCon();

// cors_mddleware
app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  })
);

app.options('*', cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - Origin: ${req.headers.origin}`);
  next();
});

app.use('/auth', AuthRoutes);
app.use('/notes', NotesRoutes);

app.get('/', (req, res) => {
  res.send('✅ Hello from backend');
});

app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

