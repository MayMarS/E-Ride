import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';

const Link = (props) => {
    return (
        <NavLink to={props.link.adress}>{props.link.name}</NavLink>
    )
}

const Header = (props) => {

    const [sticky, setSticky] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const headerSticky = scrollTop >= 10 ? 'header-fixed' : '';
        setSticky(headerSticky);
    };

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    }

    let headerLinks = props.links.map(link => <Link link={link}/>)
    return (
        <header className={sticky}>
            <div className={!openMenu ? "main-header" : "main-header main-close"}>
            {
                !openMenu && 
                <>
                <NavLink className="header-logo" to="/"></NavLink>
                <div className="header-info">
                    <nav>
                        {headerLinks}
                    </nav>
                    <button className="btn-start">Start now</button>
                </div>
                </>
            }
                <div className={!openMenu ? "menu-header-btn" : "menu-header-btn menu-close"}>
                    <button onClick={toggleMenu} className={!openMenu ? "btn-menu-open" : "btn-menu-close"}></button>
                </div>
            </div>
            <nav className={openMenu ? "menu-header" : "menu-nav-hide"} onClick={toggleMenu}>
                {headerLinks}
            </nav>
        </header>
    )
}

export default Header;