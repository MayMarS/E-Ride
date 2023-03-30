import { NavLink } from 'react-router-dom';
import './Header.scss';

const Link = (props) => {
    return (
        <NavLink to={props.link.adress}>{props.link.name}</NavLink>
    )
}

const Header = (props) => {
    let headerLinks = props.links.map(link => <Link link={link}/>)
    return (
        <header>
            <a className="header-logo" href="#"></a>
            <div className="header-info">
                <nav>
                    {headerLinks}
                </nav>
                <button className="btn-start">Start now</button>
            </div>
        </header>
    )
}

window.addEventListener('scroll', () => {
    let headerSticky = document.querySelector('header');
    let scrollTop = window.scrollY;

    if(scrollTop >= 10) {
        headerSticky.classList.add('header-fixed');
    } else {
        headerSticky.classList.remove('header-fixed');
    }
})

export default Header;