import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoY from '../../assets/images/logo-y.png';
// import LogoS from '../../assets/images/logo-s.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { faEnvelope, faHome, faMailForward, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={logoY} alt="logo" />
            {/* <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="mishyna" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/yana-mishyna/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Ymishyna'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='mailto:yana.mishina.92@gmail.com'>
                    <FontAwesomeIcon icon={faMailForward} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>)

export default Sidebar; 