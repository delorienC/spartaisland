import { Routes, Route, Navigate } from "react-router-dom";
import "../index.css";
import PasswordLost from "../pages/PasswordLost";
import AdminPanel from "../pages/AdminPanel";
import Login from "../pages/Login";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-lost" element={<PasswordLost />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
  );
};

export default AppRoutes;
