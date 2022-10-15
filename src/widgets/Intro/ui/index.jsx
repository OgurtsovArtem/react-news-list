import style from './style.module.css';
import img from 'app/assets/images/intro.png';
import video from 'app/assets/video/intro.mp4';
import { SearchNews } from 'entities/search-news';

const Intro = () => {
    return (
        <section className={style.intro}>
            <div className={style.content}>
                <h1 className={style.title}>Что творится в мире?</h1>
                <h2 className={style.subtitle}>
                    Находите самые свежие статьи на любую тему и сохраняйте в
                    своём личном кабинете.
                </h2>
                <SearchNews />
            </div>
            <div className={style.videoContainer}>
                <video
                    className={style.video}
                    src={video}
                    poster={img}
                    muted
                    autoPlay={true}
                ></video>
            </div>
        </section>
    );
};

export default Intro;
