import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    // const sendEmail = (e) => {
    //     e.preventDefault()

    //     emailjs.sendForm('gmail', 'service_efqw5ha', refForm.current, '1MFHc33ehygIIlgnl')

    //         .then(
    //             () => {
    //                 alert('Message successfully sent!')
    //                 window.location.reload(false)
    //             },
    //             () => {
    //                 alert('Failed to send the message, please try again')
    //             }
    //         )
    // }

    const sendEmail = (e) => {
        e.preventDefault()



        emailjs.sendForm('service_efqw5ha', 'template_66zh0vp', refForm.current, {
            publicKey: '1MFHc33ehygIIlgnl',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send the message, please try again')
                },
            );
    }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm interested in freelance work, especially on ambitious projects. Feel free to contact me for any inquiries. I thrive on challenges and love learning new technologies, making me confident in taking on large-scale projects.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Yana Mishyna,
                    <br />
                    USA,
                    <br />
                    East Princeton Street,
                    <br />    
                    Orlando, FL 32804
                    <br />
                    <span>yana.mishina.92@gmail.com</span>
                </div>
            </div>
            <Loader type="pacman" active />


        </>
    )

}

export default Contact