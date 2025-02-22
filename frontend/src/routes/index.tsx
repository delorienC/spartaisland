import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";
import App from "../App";
import Login from "../pages/Login";
import PasswordLost from "../pages/PasswordLost";
import AdminPanel from "../pages/AdminPanel";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-lost" element={<PasswordLost />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
