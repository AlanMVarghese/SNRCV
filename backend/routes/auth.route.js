// import express from "express";
// import {
//   login,
//   logout,
//   signup,
//   verifyEmail,
//   forgotPassword,
//   resetPassword,
//   checkAuth,
//   help,
//   getProducts,
//   vhelp,
// } from "../controllers/auth.controller.js";
// import { verifyToken } from "../middleware/verifyToken.js";

// const router = express.Router();

// router.get("/check-auth", verifyToken, checkAuth);
// router.get("/volunteers", getProducts, vhelp);
// // router.get("/relevant-requests", verifyToken, fetchRelevantRequests);
// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);
// router.post("/citizens", help);

// router.post("/verify-email", verifyEmail);
// router.post("/forgot-password", forgotPassword);

// router.post("/reset-password/:token", resetPassword);

// export default router;

import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
  help,
  getProducts,
  vhelp,
  markHelpCompleted,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Routes that need authentication
router.get("/check-auth", verifyToken, checkAuth);

// Route to get all unassigned help requests for volunteers (GET)
router.get("/volunteers", verifyToken, getProducts); // fetches available help requests

// Route for volunteer to accept a help request (POST)
router.post("/volunteers", verifyToken, vhelp); // accepts a specific help request

// User authentication and signup routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Citizen help request route
router.post("/citizens", help);
router.post("/mark-help-completed", markHelpCompleted);

// Email verification and password recovery routes
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
