import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ sucess: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ sucess: false, message: "Token invalid" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Internal server error" });
  }
};

// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//   // Check for token in cookies or Authorization header
//   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res
//       .status(401)
//       .json({ success: false, message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (!decoded) {
//       return res.status(401).json({ success: false, message: "Invalid token" });
//     }

//     req.userId = decoded.userId; // Attach decoded user ID to request object
//     next();
//   } catch (error) {
//     console.log("Error verifying token:", error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Failed to authenticate token" });
//   }
// };
