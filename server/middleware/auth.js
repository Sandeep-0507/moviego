import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = req.auth();

    // 1️⃣ Not logged in
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    // 2️⃣ Get Clerk user
    const user = await clerkClient.users.getUser(userId);

    // 3️⃣ Check admin role
    if (user.privateMetadata.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access denied",
      });
    }

    req.user = user; // optional
    next();
  } catch (error) {
    console.error("protectAdmin error:", error);
    return res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }
};  