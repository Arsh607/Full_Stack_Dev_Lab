import type { Request, Response } from "express";
import { roleService } from "../services/roleService";

export async function getRoles(
  _request: Request,
  response: Response
) {
  try {
    const roles = await roleService.getRoles();
    return response.json(roles);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      message: "Failed to retrieve roles.",
    });
  }
}

export async function createRole(
  request: Request,
  response: Response
) {
  try {
    const result = await roleService.createRole(request.body);

    if (!result.success) {
      return response.status(400).json(result);
    }

    return response.status(201).json(result);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      message: "Failed to create role.",
    });
  }
}