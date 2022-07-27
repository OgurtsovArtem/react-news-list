import style from "./Header.module.css";
import clsx from "clsx";
import Burger from "../Burger/Burger";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Overaly from "../Overlay/Overlay";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollHeader, setscrolledHeader] = useState(false);
  const [headerRef, headerInView] = useInView({
    threshold: 0,
  });

  const aciveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    headerInView ? setscrolledHeader(false) : setscrolledHeader(true);
  }, [headerInView]);
  const white = true;
  return (
    <header
      ref={headerRef}
      className={clsx(style.header, {
        [style.headerWhite]: white,
        [style.dark]: !white,
      })}
    >
      <div
        className={clsx(style.wrapper, {
          [style.headerScroll]: scrollHeader,
        })}
      >
        <div className={clsx("container", style.content)}>
          <h1 className={style.logo}>NewsExplorer</h1>
          <Burger onClick={aciveMenu} active={activeMenu} />
          <nav
            className={clsx({
              [style.navigation]: !activeMenu,
              [style.navigationActive]: activeMenu,
            })}
          >
            <ul className={style.list}>
              <li className={style.item}>
                <a className={style.linkActive} href="/">
                  Главная
                </a>
              </li>
              <li className={style.item}>
                <a className={style.link} href="/">
                  Сохранённые статьи
                </a>
              </li>
            </ul>
            <button className={clsx("button-active-effect", style.button)}>Авторизоваться</button>
          </nav>
        </div>
      </div>
      <Overaly
        onClose={aciveMenu}
        className={clsx({
          [style.overlay]: !activeMenu,
          [style.overlayActive]: activeMenu,
        })}
      />
    </header>
  );
};

export default Header;
