// import http from 'http';
// import express, { Request, Response, NextFunction } from 'express';

// import { userRouter } from './users/users';

// const host = '127.0.0.1';
// const app = express();

// const port = 8000;

// app.all('/hello', (req, res, next) => {
// 	console.log('edwe');
// 	next();
// });

// app.use('/users', userRouter);

// app.get('/hello', (req, res) => {
// 	throw new Error('EWLWKEJ');
// 	// res.send("Hello cyka !");
// });

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
// 	res.status(401).send(err.message);
// });

// app.listen(port, () => {
// 	console.log('Servers is start', port);
// });

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/plain")
//     res.end("Kek")
// })

// server.listen(port, host, () => {
//     console.log(` Start on ${host}:${port}`);
// })
