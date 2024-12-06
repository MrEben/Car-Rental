import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import CarRe from "./pages/CarDetails";
import RentBuddy from "./pages/Dashboard/main";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import CarRentalPage from "./pages/car-rental-plain";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/cars/:id" element={<CarRentalPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<RentBuddy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
