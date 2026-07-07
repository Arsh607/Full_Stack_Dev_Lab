import type { Role } from "../types/Role";

const API_URL = "http://localhost:5001/api/roles";

export const roleRepo = {
  async getRoles(): Promise<Role[]> {
    const response = await fetch(API_URL);
    return response.json();
  },

  async createRole(role: Role): Promise<Role[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(role),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result.roles;
  },
};