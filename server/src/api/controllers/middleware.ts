import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
dotenv.config();

interface CustomJwtPayload extends JwtPayload {
  userId: string;
}

declare module "express-serve-static-core" {
  interface Request {
    userRole?: string;
    userId: string;
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization || "";
  console.log("TOKE: ", token);
  
  try {
    const jwtToken = token.split(" ")[1];
    const response = jwt?.verify(
      jwtToken,
      process.env.JWT_SECRET as string
    ) as CustomJwtPayload;
    req.userRole = response.userRole;
    if (response.studentId) req.userId = response.studentId;
    if (response.teacherId) req.userId = response.teacherId;
    if (response.adminId) req.userId = response.adminId;

    console.log("RESPOSE: ", response);
    
    // response.userRole && (response.studentId || response.teacherId)

    if (response.userId || (response.userRole && (response.studentId || response.teacherId))) {
      next();
    } else {
      console.log("LMAO HERE");
      
      return res.json({
        err: "not authorized",
      });
    }
  } catch (e: any) {
    console.log("HERERE");
    
    return res.status(403).json({
      err: "not authorized",
    });
  }
}
