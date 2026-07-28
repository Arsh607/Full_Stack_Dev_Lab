import type { Role } from "../types/Role";

const API_URL = `${import.meta.env.VITE_API_URL}/api/roles`;

export const roleRepo = {
  async getRoles(): Promise<Role[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to retrieve roles.");
    }

    return response.json();
  },

  async createRole(newRole: Role, token: string): Promise<Role[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newRole),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result.roles;
  },
};