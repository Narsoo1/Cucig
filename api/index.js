import express from 'express';
import cors from 'cors';

// Import semua handler dari file terpisah
import checkUsername from './checkUsername.js';
import deleteChatHistory from './deleteChatHistory.js';
import logNewUser from './logNewUser.js';
import sendChatNotification from './sendChatNotification.js';
import updateReadStatus from './updateReadStatus.js';

const app = express();
app.use(cors());
app.use(express.json());

// Tes endpoint
app.get('/', (req, res) => {
  res.send('QIH Chat API aktif!');
});

// Endpoint dari masing-masing handler
app.post('/checkUsername', checkUsername);
app.post('/deleteChatHistory', deleteChatHistory);
app.post('/logNewUser', logNewUser);
app.post('/sendChatNotification', sendChatNotification);
app.post('/updateReadStatus', updateReadStatus);

// Export untuk Vercel
export default app;
