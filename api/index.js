// api/index.js
import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

import checkUsername from '../controllers/checkUsername.js';
import deleteChatHistory from '../controllers/deleteChatHistory.js';
import logNewUser from '../controllers/logNewUser.js';
import sendChatNotification from '../controllers/sendChatNotification.js';
import updateReadStatus from '../controllers/updateReadStatus.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/checkUsername', checkUsername);
app.post('/deleteChatHistory', deleteChatHistory);
app.post('/logNewUser', logNewUser);
app.post('/sendChatNotification', sendChatNotification);
app.post('/updateReadStatus', updateReadStatus);

export const handler = serverless(app);
