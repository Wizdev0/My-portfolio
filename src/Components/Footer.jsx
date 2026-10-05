import './Footer.css';
import { socials } from '../socials';
import { motion } from 'motion/react';

export function Footer() {

    return (
        <motion.section
            className='footer-div' id='contact'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="footer-head">

                <h2 className="footer-head-h2">
                    LET'S WORK <span className='together'>TOGETHER...</span>
                </h2>

                <div className="footer-write-div">
                    <p className="footer-head-p">
                        <span>Have an idea or project in mind?</span>
                        <span>Let's build something useful together.</span>
                    </p>

                    <a
                        className='contact-btn'
                        href='https://wa.me/2348062749407?text=Hello%20I,%20need%20your%20service...'
                    >
                        Contact me  →
                    </a>
                </div>

                <div className="copyright-and-socials">

                    <div className="copy-right-div">
                        <p className="copy-name">
                            Otuwe Wisdom
                        </p>
                        <p className="copy-year">
                            &copy; {new Date().getFullYear()}
                        </p>
                        <a href="mailto:otuwewisdom01@gmail.com" className="copy-email">
                            otuwewisdom01@gmail.com
                        </a>
                    </div>

                    <div className="socials-div">

                        {socials.map((commedia) => {
                            const Icon = commedia.icon;

                            return (
                                <a href={commedia.url} target='blank' rel='noopener noreferrer' key={commedia.name} className='socials-links'>
                                    <Icon title={commedia.name} />
                                </a>
                            );
                        })}



                    </div>

                </div>

            </div>
        </motion.section>
    );
}