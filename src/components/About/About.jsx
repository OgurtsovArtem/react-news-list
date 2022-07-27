import clsx from "clsx";
import style from "./About.module.css";
import img from "../../assets/images/avatar.jpeg";

const About = () => {
  return (
    <section className={clsx("container", style.about)}>
      <div className={style.avatar}>
        <img className={style.image} src={img} alt="" />
      </div>
      <div className={style.description}>
        <h2 className={style.title}>Об авторе</h2>
        <p className={style.text}>
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы
          занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className={style.text}>
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем
          можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
};

export default About;
