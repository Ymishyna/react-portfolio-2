
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const About = () => {

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
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
        </div>
    )
}

export default About