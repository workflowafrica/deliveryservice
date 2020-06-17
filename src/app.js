/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
import express from 'express';
// import socketIO from 'socket.io';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import swaggerJSDoc from 'swagger-jsdoc';
// import path from 'path';
// import fileUpload from 'express-fileupload';
// import EventEmitter from 'events';

import { getEnv, Response, logger } from './utils';
import customAPI from './api';
// import jobs from './tasks/index.task';

const app = express();
const server = http.createServer(app);
// const io = socketIO(server);
// const emitter = new EventEmitter();

// emitter.setMaxListeners(100);

const port = getEnv('PORT', 9000);

app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define Static folder for public assets
// app.use(express.static(path.join(__dirname, '../swagger-documentation')));

// express file upload
// app.use(fileUpload({ useTempFiles: true }));

// swagger definition
// const swaggerDefinition = {
//   info: {
//     title: 'One Kiosk API',
//     version: '1.0.0',
//     description: 'Official API Documentation for OneKiosk',
//   },
//   host: getEnv('HOST_URL'),
//   basePath: '/api/v1',
// };

// // initialize swagger-jsdoc
// const swaggerSpec = swaggerJSDoc({
//   swaggerDefinition,
//   apis: ['**/**.route.js'], // pass all in array
// });

// // serve swagger
// app.get('/doc', (req, res) => {
//   res.send(swaggerSpec);
// });

// app.get('/docs', (req, res) => {
//   res.sendFile(path.join(__dirname, '../swagger-documentation/index.html'));
// });

app.get('/', (req, res) => {
  Response(res, { status: 200, message: 'Welcome to Workflow package delivery' });
});

// run jobs
// jobs();

// send express server to routes
customAPI(app);

// const users = [];
// io.on('connection', (socket) => {
//   const socketId = socket.id;
//   const clientIp = socket.request.connection.remoteAddress;

//   socket.emit('connection');
//   const currentUser = [];

//   socket.on('user online status', (data) => {
//     currentUser.push(data);
//     // io.username = data.firstname;

//     const user = users.filter((el) => {
//       return currentUser.id !== el.id;
//     });

//     users.push({ ...data, socketId, online: true });
//     io.emit('admin view user online', user);
//     // }
//   });

//   logger(`New connection from ${clientIp}:${socketId}`);

//   setInterval(() => {
//     socket.emit('vendorconfirm');
//   }, 4000);

//   setInterval(() => {
//     socket.emit('notification');
//   }, 4000);

//   setInterval(() => {
//     socket.emit('orders');
//   }, 4000);

//   setInterval(() => {
//     socket.emit('vendorStores');
//   }, 10000);

//   setInterval(() => {
//     socket.emit('vendororders');
//     socket.emit('vendorDashboard');
//   }, 6000);

//   socket.on('admin-order-handler-clicked', () => {
//     io.emit('admin-orders-handler');
//   });

//   setInterval(() => {
//     socket.emit('update location');
//     io.emit('admin view user online', users);
//   }, 4000);

//   socket.on('disconnect', () => {
//     users.forEach((user) => {
//       if (user.socketId === socket.id) {
//         // eslint-disable-next-line guard-for-in
//         // eslint-disable-next-line no-restricted-syntax
//         for (const key in user) {
//           delete user[key];
//         }
//       }
//     });

//     logger(`A user with ${io.firstname} disconnected`);
//   });
// });

server.listen(getEnv('PORT', port), () => {
  logger(`Server Running at:
    http://localhost:${getEnv('PORT', port)}`);
});
export default app;
