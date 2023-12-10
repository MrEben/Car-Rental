import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Contact from "./components/Contact/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/get-started" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
