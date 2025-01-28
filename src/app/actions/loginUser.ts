"use server";

export async function loginUser(username: string, password: string) {
  // Hardcoded user credentials for demo
  const users = [
    { username: "admin", password: "password123" },
    { username: "user", password: "userpass" }
  ];

  // Find matching user
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    return { success: true };
  } else {
    return { success: false, error: "Invalid username or password" };
  }
}
