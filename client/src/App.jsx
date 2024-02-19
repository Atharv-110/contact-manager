import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateContact from "./pages/CreateContact";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-contact" element={<CreateContact />} />
      </Routes>
    </main>
  );
}

export default App;
