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
import { modelHeader } from 'shared/models/header-nav';

const Header = () => {
    const [scrollHeader, setScrolledHeader] = useState(false);
    const { links } = useStore(modelHeader.$navLinks);
    const logo = useStore(modelHeader.$navLogo);
    const buttonText = useStore(modelHeader.$navButton);
    const menuStatus = useStore(modelHeader.$isActive);
    const [headerRef, headerInView] = useInView({
        threshold: 0,
    });

    const activeMenu = () => modelHeader.menuIsActive(!menuStatus);

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
                    <Link
                        className={clsx(style.logo, {
                            [style.logoInverse]: menuStatus,
                        })}
                        to="/"
                    >
                        {logo}
                    </Link>
                    <Burger onClick={activeMenu} />
                    <Nav>
                        {links.map((link) => {
                            return (
                                <NavTab
                                    key={link.id}
                                    text={link.title}
                                    path={link.path}
                                    onlyAuth={link.onlyAuth}
                                />
                            );
                        })}
                        <AuthButton text={buttonText} />
                    </Nav>
                </div>
            </div>
            <Overlay
                onClose={activeMenu}
                className={clsx({
                    [style.overlay]: !menuStatus,
                    [style.overlayActive]: menuStatus,
                })}
            />
        </header>
    );
};

export default Header;
