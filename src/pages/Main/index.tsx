import { About } from "widgets/About";
import { CardList } from "widgets/CardList";
import { Intro } from "widgets/Intro";
const MainPage = () => {
  return (
    <>
      <Intro />
      <CardList />
      <About />
    </>
  );
};

export default MainPage;
