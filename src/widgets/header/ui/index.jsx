import style from './style.module.css';
import clsx from 'clsx';
import { Burger } from 'shared/ui/burger';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Overlay from 'shared/ui/overlay/ui';
import { Link } from 'react-router-dom';
import { NavTab } from 'shared/ui/nav-tab';
import { Nav } from 'shared/ui/nav';
import { AuthButton } from 'entities/auth-button';
import { useStore } from 'effector-react';
import { modelAuth } from 'shared/models/auth';

const Header = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [scrollHeader, setScrolledHeader] = useState(false);
    const isAuth = useStore(modelAuth.$user);
    const [headerRef, headerInView] = useInView({
        threshold: 0,
    });

    const activeMenu = () => setMenuIsActive(!menuIsActive);

    const wrapperStyle = clsx(style.wrapper, {
        [style.headerScroll]: scrollHeader,
    });

    useEffect(() => {
        headerInView ? setScrolledHeader(false) : setScrolledHeader(true);
    }, [headerInView]);

    return (
        <header ref={headerRef} className={style.header}>
            <div className={wrapperStyle}>
                <div className={clsx('container', style.content)}>
                    <Link className={style.logo} to="/">
                        NewsExplorer
                    </Link>
                    <Burger onClick={activeMenu} active={menuIsActive} />
                    <Nav activeMenu={menuIsActive}>
                        <NavTab text="Главная" path="/" />
                        <NavTab
                            text=" Сохранённые статьи"
                            path="/profile"
                            isVisible={isAuth}
                        />
                        <AuthButton text={'Авторизоваться'} />
                    </Nav>
                </div>
            </div>
            <Overlay
                onClose={activeMenu}
                className={clsx({
                    [style.overlay]: !menuIsActive,
                    [style.overlayActive]: menuIsActive,
                })}
            />
        </header>
    );
};

export default Header;
