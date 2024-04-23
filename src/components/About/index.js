
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact, faNode, faNpm } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import './index.scss'
import { Link } from 'react-router-dom'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeoutId); // Clear the timeout when component unmounts
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am very ambitious web developer seeking opportunities with established IT companies to leverage the latest technologies on diverse and challenging projects.
                    </p>
                    <p align="LEFT">
                        I am quietly confident, naturally curious, and continuously refining my skills by tackling web development challenges one at a time.
                    </p>
                    <p>
                        Summing up who I am in a nutshell: I'm deeply committed to my family, a proud parent of two furry companions, a lover of nature, finding solace in the ocean's embrace while riding waves, all the while deeply engrossed in the world of technology.
                    </p>
                    <Link to="https://drive.google.com/file/d/1MrXM-0MhIw5Nx35hAYa9XaeTlZ_hS44t/view?usp=sharing" className="flat-button">
                        MY RESUME
                    </Link>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNpm} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faNode} color='#EC4D28' />
                        </div>

                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About