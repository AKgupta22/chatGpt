import { Navigate } from "react-router-dom";

export default function AdminRoute(props) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (token && role === "admin") return { ...props.children };
  else return Navigate({ to: "/profile" });
}