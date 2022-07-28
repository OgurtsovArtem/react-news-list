import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { MainPage, Profile } from "../../pages";
import "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
