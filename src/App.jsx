import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Rounds, Round } from "./components/index";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  useEffect(() => {
    // Add event listener on component mount
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 123) {
        // F12 key code
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
        // Ctrl+Shift+I
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
        // Ctrl+Shift+C
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
        // Ctrl+Shift+J
        e.preventDefault();
      }
      if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
        // Ctrl+U
        e.preventDefault();
      }
    });

    // Remove event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
      document.removeEventListener("keydown", (e) => {
        if (e.keyCode === 123) {
          e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
          e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
          e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
          e.preventDefault();
        }
        if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
          e.preventDefault();
        }
      });
    };
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Rounds />} />
            <Route path="/round/:id" element={<Round />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
