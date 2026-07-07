import type { Request, Response } from "express";
import { roleService } from "../services/roleService";

export function getRoles(_request: Request, response: Response) {
  const roles = roleService.getRoles();
  response.json(roles);
}

export function createRole(request: Request, response: Response) {
  const result = roleService.createRole(request.body);

  if (!result.success) {
    return response.status(400).json(result);
  }

  return response.status(201).json(result);
}