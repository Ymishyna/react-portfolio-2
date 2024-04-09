
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
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
                <p>
                    I am quietly confident, naturally curious, and continuously refining my skills by tackling web development challenges one at a time.
                </p>
                <p>
                    Summing up who I am in a nutshell: I'm deeply committed to my family, a proud parent of two furry companions, a lover of nature, finding solace in the ocean's embrace while riding waves, all the while deeply engrossed in the world of technology.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#DD0031' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />
                    </div>

                </div>
            </div>

        </div>




    )
}

export default About