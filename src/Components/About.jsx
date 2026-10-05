import './About.css';
import AboutPicture from '../assets/Image/pic-5.webp'
import { motion } from "motion/react"

export function About(){
    return(
        <motion.section id="about" className='about-section'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        >
            
            <div className="about-header">
                <h2 className="abt-hd">[About Me]</h2>
            </div>

            <div className="about-writeup">

                <p className="abt-wrt-1">
                   <span className="highlight">
                    I'm Otuwe Wisdom, a web developer
                    </span> passionate about creating modern, responsive, and user-friendly digital experiences. I enjoy learning through practice, solving problems, and turning ideas into functional and meaningful solutions. I'm curious, self-motivated, and always looking for opportunities to improve my skills and grow.
                </p>

                <div className="about-image">
                    <img src={AboutPicture} alt="My Picture" className="about-pic" />
                </div>
                

                <p className="abt-wrt-2">
                   My work is driven by a desire to create things that are useful, simple, and enjoyable to use. I pay attention to details, enjoy experimenting with new ideas, and believe that every project is an opportunity to learn something new. As I continue developing my skills, my goal is to build valuable solutions and grow into a well-rounded professional.
                </p>
            </div>
        </motion.section>
    );
}