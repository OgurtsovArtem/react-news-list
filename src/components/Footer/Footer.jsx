import clsx from "clsx";
import style from "./Footer.module.css";
import vk from "../../assets/icons/vk.svg";
import github from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <footer className={clsx("container", style.footer)}>
      <p className={style.copyright}>© 2020 Supersite, Powered by News API</p>
      <nav className={style.navigation}>
        <ul className={style.list}>
          <li className={style.item}>
            <a className={style.link} href="/" target="_blank" rel="noopener noreferrer">
              Главная
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="/" target="_blank" rel="noopener noreferrer">
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className={style.list}>
          <li className={style.item}>
            <a className={style.link} href="/" target="_blank" rel="noopener noreferrer">
              <img className={style.icon} src={vk} alt="facebook" />
            </a>
          </li>
          <li className={style.item}>
            <a
              className={style.link}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={style.icon} src={github} alt="github" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
