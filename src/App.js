import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import AdminHome from "./Components/views/Admin/AdminHome";
import AccountDelete from "./Components/views/User/AccountDelete";
import ChatGpt from "./Components/views/User/ChatGpt";
import UserProfile from "./Components/views/User/UserProfile";
import AdminRoute from "./routes/adminRoutes";
import PrivateRoute from "./routes/PrivateRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/deleteAccount" element={<PrivateRoute><AccountDelete /></PrivateRoute>} />
        <Route path="/chatGpt" element={<PrivateRoute><ChatGpt /></PrivateRoute>} />
        <Route path="/adminHome" element={<AdminRoute><AdminHome /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
