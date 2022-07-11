import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./page/SearchPage";
import ThreadPage from "./page/ThreadPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/thread" element={<ThreadPage />} />
        <Route path="*" element={<Navigate to="/search" replace />} />
      </Routes>
    </div>
  );
}

export default App;
