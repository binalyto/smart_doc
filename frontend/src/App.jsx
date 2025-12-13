import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ToastContainer>
    </div>
  );
}

export default App;
