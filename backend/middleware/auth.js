import jwt from "jsonwebtoken";
import { roles } from "../utils/roles.js";

export const protect = (permissions = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      const userPermissions = roles[decoded.role] || [];
      const hasPermission = permissions.every(p => userPermissions.includes(p));

      if (!hasPermission) return res.status(403).json({ message: "Forbidden" });

      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};
