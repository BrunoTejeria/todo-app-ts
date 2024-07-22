import { Request, Response, NextFunction } from 'express';


// TODO: move logRequest to logRequestInConsole
const logRequestInConsole = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${req.method}]: ${req.ip} => ${req.url} `)
    next();
}

const logRequest = (req: Request, res: Response, next: NextFunction) => {

}

export {logRequest, logRequestInConsole};