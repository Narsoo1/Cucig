import express from 'express';
import cors from 'cors';

import checkUsername from './controllers/checkUsername.js';
import deleteChatHistory from './controllers/deleteChatHistory.js';
import logNewUser from './controllers/logNewUser.js';
import sendChatNotification from './controllers/sendChatNotification.js';
import updateReadStatus from './controllers/updateReadStatus.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/checkUsername', checkUsername);
app.post('/deleteChatHistory', deleteChatHistory);
app.post('/logNewUser', logNewUser);
app.post('/sendChatNotification', sendChatNotification);
app.post('/updateReadStatus', updateReadStatus);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
