import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
    return(
        <li><NavLink to="/">{props.link}</NavLink></li>
    )
}
const Social = (props) => {
    return(
        <a href={props.social.link}><img src={props.social.icon} alt="social logo"/></a>
        
    )
}

const Footer = (props) => {
        let social = props.social.map(social => <Social social={social}/>)
        let ulLinks1 = props.footer.links1.map(link => <Link link={link}/>)
        let ulLinks2 = props.footer.links2.map(link => <Link link={link}/>)
        let ulLinks3 = props.footer.links3.map(link => <Link link={link}/>)
        let ulLinks4 = props.footer.links4.map(link => <Link link={link}/>)
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-info">
                    <h4>Stay up to speed</h4>
                    <p>Sign up to get the latest Dance offers, updates, and tips straight to your inbox.</p>
                    <form>
                        <input placeholder="your@email.com"></input>
                        <button className="btn-input"></button>
                    </form>
                    <span>By checking this box, you allow Dance to collect data relating to the Dance newsletter, including whether it has been opened and clicked through. For more information.</span>
                </div>

                <div className="footer-menu">
                    <ul>{ulLinks1}</ul>
                    <ul>{ulLinks2}</ul>
                    <ul>{ulLinks3}</ul>
                    <ul>{ulLinks4}</ul>
                </div>

            </div>
            <div className="footer-social">
                {social}
            </div>
            <p className="made-by">
                © Made by MayMarS - 2023
            </p>
        </footer>
    )
}

export default Footer;