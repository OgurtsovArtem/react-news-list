import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
