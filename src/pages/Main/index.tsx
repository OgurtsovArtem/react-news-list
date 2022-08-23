import { About } from "widgets/about";
import { CardList } from "widgets/card-list";
import { Intro } from "widgets/intro";
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
