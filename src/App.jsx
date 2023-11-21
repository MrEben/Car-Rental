import Navbar from "./components/navbar/Navbar";
// import Card from "./components/Header/Header";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
