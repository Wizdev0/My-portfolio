import './HeroSection.css';
import HeroPicture from '../assets/Image/pic4-3-bw.webp';


export function HeroSection() {


    return(
        <>
            <div className="hero-section">
                <div className="hero-writeup">
                    <h2 className="hero-name">Hi, I'm Otuwe Wisdom</h2>
                    <p className="hero-info">I'm a Web Developer</p>
                    <p className="lil-quote">I write code that makes the web a little more beautiful, one pixel at a time.</p>
                    <a
                        className='hero-btn'
                        href='https://wa.me/2348062749407?text=Hello%20I,%20need%20your%20service..." target="_blank'
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="hero-image">
                    <img src={HeroPicture} alt="My picture" className="my-pic" width="100px"/>
                </div>
            </div>
        </>
    );
}