// api/checkUsername.js
import admin from "../firebaseAdminConfig.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { username } = req.body;

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Username is required and must be a string." });
  }

  try {
    const db = admin.firestore();
    const snapshot = await db.collection("users")
      .where("username", "==", username.trim().toLowerCase())
      .get();

    const available = snapshot.empty;
    res.status(200).json({ available });
  } catch (error) {
    console.error("Error checking username:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
