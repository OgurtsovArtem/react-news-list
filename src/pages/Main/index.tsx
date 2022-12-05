import { About } from 'widgets/about';
import { CardsMain } from 'widgets/cards-main';
import { Intro } from 'widgets/intro';
const MainPage = () => {
    return (
        <>
            <Intro />
            <CardsMain />
            <About />
        </>
    );
};

export default MainPage;
