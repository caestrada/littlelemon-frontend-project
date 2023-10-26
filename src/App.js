import { Routes, Route, Link } from "react-router-dom";

import About from "./components/AboutSection";

import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
//
