import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Conn from "./components/Conn/conn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/get-started" element={<Conn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
