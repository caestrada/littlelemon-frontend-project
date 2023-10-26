import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
//
