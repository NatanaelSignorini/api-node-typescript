import {NextFunction, Request, Response} from 'express'
import { verify } from 'jsonwebtoken'

interface Payload{
  sub: string;
}

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){

  // Receber o token
  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).end();
  }

  const token = authToken.split(" ")[1]

  console.log(token)
  try {
    
    const {sub} = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    return next();

  } catch (err){
    return response.status(401).end();
  }



}