import "@fortawesome/fontawesome-free/css/all.min.css";

import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FaceScan from "./pages/FaceScan.jsx";
import UserForm from "./pages/UserForm.jsx";
import Results from "./pages/Results.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan/face" element={<FaceScan />} />
        <Route path="/scan/face/details" element={<UserForm />} />
        <Route path="/scan/face/results" element={<Results />} />
        
      </Routes>
    </div>
  );
}

export default App;
