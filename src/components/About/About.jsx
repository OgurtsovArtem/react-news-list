import clsx from "clsx";
import style from "./About.module.css";
import img from "../../assets/images/web.png";

const About = () => {
  return (
    <section className={clsx("container", style.about)}>
      <div className={style.avatar}>
        <img className={style.image} src={img} alt="" />
      </div>
      <div className={style.description}>
        <h2 className={style.title}>О проекте</h2>
        <p className={style.text}>
          Это небольшой Pet-проект для закрепления и объединения знаний с двух курсов -
          Web-разработчик и React-разработчик от Yandex Praktikum
        </p>
        <p className={style.text}>
          В данной работе использован стек MERN <span className={style.separator}> — </span>
          <span className={style.accent}>MongoDB</span>{" "}
          <span className={style.accent}>Express</span>{" "}
          <span className={style.accent}>ReactJS</span>{" "}
          <span className={style.accent}>Node.js</span>
        </p>
        <p className={style.text}>
          Типизация <span className={style.separator}> — </span>
          <span className={style.accent}>TypeScript</span>
        </p>
        <p className={style.text}>
          Тесты <span className={style.separator}> — </span>
          <span className={style.accent}>Cypress</span> <span className={style.accent}>Jest</span>
        </p>
      </div>
    </section>
  );
};

export default About;
