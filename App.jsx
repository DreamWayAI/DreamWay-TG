
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import HomePage from "./HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
