import style from "./style.module.css";
import { Route, Routes } from "react-router-dom";
import { MainPage, Profile } from "pages";
import "./style.module.css";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

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
