import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
