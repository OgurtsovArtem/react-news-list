import style from "./style.module.css";
import clsx from "clsx";
import { Burger } from "shared/ui/burger";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Overaly from "shared/ui/overlay/ui";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthPopupForm } from "widgets/auth-popup-form";
import { modelModal } from "shared/modal";
import { Done } from "features/done";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollHeader, setScrolledHeader] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const [headerRef, headerInView] = useInView({
    threshold: 0,
  });

  const aciveMenu = () => setActiveMenu(!activeMenu);
  const openAuthPopup = () => modelModal.openModal("auth-modal");
  const openDonePopup = () => modelModal.openModal("done-modal");

  useEffect(() => {
    headerInView ? setScrolledHeader(false) : setScrolledHeader(true);
    location.pathname === "/profile" ? setTheme("dark") : setTheme("light");
  }, [headerInView, location]);

  return (
    <header
      ref={headerRef}
      className={clsx(style.header, {
        [style.headerWhite]: theme === "light",
        [style.headerDark]: theme === "dark",
      })}
    >
      <div
        className={clsx(style.wrapper, {
          [style.headerScroll]: scrollHeader,
        })}
      >
        <div className={clsx("container", style.content)}>
          <Link className={style.logo} to="/">
            NewsExplorer
          </Link>
          <Burger onClick={aciveMenu} active={activeMenu} />
          <nav
            className={clsx({
              [style.navigation]: !activeMenu,
              [style.navigationActive]: activeMenu,
            })}
          >
            <ul className={style.list}>
              <li className={style.item}>
                <NavLink
                  className={({ isActive }) => (isActive ? style.linkActive : style.link)}
                  to="/"
                >
                  Главная
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink
                  className={({ isActive }) => (isActive ? style.linkActive : style.link)}
                  to="/profile"
                >
                  Сохранённые статьи
                </NavLink>
              </li>
            </ul>
            <button className={clsx("button-active-effect", style.button)} onClick={openAuthPopup}>
              Авторизоваться
            </button>
            <button className={clsx("button-active-effect", style.button)} onClick={openDonePopup}>
              Авторизоваться
            </button>
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
