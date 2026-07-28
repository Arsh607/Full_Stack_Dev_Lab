import type { NextFunction, Request, Response } from "express";
import { getAuth } from "@clerk/express";

export function requireUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const auth = getAuth(request);

  if (!auth.isAuthenticated || !auth.userId) {
    response.status(401).json({
      message: "Authentication required.",
    });
    return;
  }

  next();
}