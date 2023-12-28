import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
