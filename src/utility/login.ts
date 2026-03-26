/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000").replace(/\/$/, "");

const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(
      err.message || "An error occurred while logging in."
    );
  }
};

export default loginUser;
