import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import AdminHome from "./Components/views/Admin/AdminHome";
import HomePage from "./Components/views/HomePage/HomePage";
import AccountDelete from "./Components/views/User/AccountDelete";
import ChatGpt from "./Components/views/User/ChatGpt";
import Hypnoscript from "./Components/views/User/Hypnoscript";
import UserProfile from "./Components/views/User/UserProfile";
import AdminRoute from "./routes/adminRoutes";
import PrivateRoute from "./routes/PrivateRoute";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UnAuthenticatedRoutes><Login /></UnAuthenticatedRoutes>} />
        <Route path="/register" element={<UnAuthenticatedRoutes><SignUp /></UnAuthenticatedRoutes>} />
        <Route path="*" element={<HomePage />} />
        <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/deleteAccount" element={<PrivateRoute><AccountDelete /></PrivateRoute>} />
        <Route path="/chatGpt" element={<PrivateRoute><ChatGpt /></PrivateRoute>} />
        <Route path="/hypnoscript" element={<PrivateRoute><Hypnoscript /></PrivateRoute>} />
        <Route path="/adminHome" element={<AdminRoute><AdminHome /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
