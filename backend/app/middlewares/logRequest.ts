import express, { Request, Response, NextFunction } from 'express';

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${req.method}]: ${req.ip} => ${req.url} `)
  next();
}

export default logRequest;