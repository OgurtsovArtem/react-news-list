import style from "./style.module.css";
import img from "app/assets/images/intro.png";
import video from "app/assets/video/intro.mp4";
import { Button } from "shared/ui/button";

const Intro = () => {
  const startSearch = () => {
    return;
  };
  return (
    <section className={style.intro}>
      <div className={style.content}>
        <h1 className={style.title}>Что творится в мире?</h1>
        <h2 className={style.subtitle}>
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </h2>
        <form className={style.form} id="search-from">
          <input
            className={style.input}
            type="text"
            placeholder="Введите тему новости"
            maxLength={80}
          />
          <Button className={style.button} color={"primary"} type="submit" onClick={startSearch}>
            Искать
          </Button>
        </form>
      </div>
      <div className={style.videoContainer}>
        <video className={style.video} src={video} poster={img} muted autoPlay={true}></video>
      </div>
    </section>
  );
};

export default Intro;
