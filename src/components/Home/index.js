import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Y.png';
import './index.scss';

const Home = () => {
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm<img src={LogoTitle} alt="developer" />ana<br />
                Full Stack Software Developer
                </h1>
                <h2> MERN (MongoDB | ExpressJS | React | NodeJS) / JavaScript / HTML / CSS</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home