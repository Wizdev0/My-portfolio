import './ProjectPage.css';
import { projects } from '../projects.js';
import { Link } from 'react-router';
import { motion } from 'motion/react';


export function ProjectPage() {
    return (
        <>
            <div className="link-div" id='projectTop'>

                <Link to="/" className='link-home'>
                    <span>←</span>
                    <span>Back Home</span>
                </Link>
            </div>


            <motion.div className='project-div'
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: -10 }}
                transition={{ duration: 0.9 }}
            >

                <div className="header-projects">
                    <h2 className="head-h2">
                        Things I've Built
                    </h2>
                    <p className="head-p">
                        A collection of projects I've created while learning, experimenting, and growing as a developer.
                    </p>
                </div>

                <div className="main-projects">
                    {projects.map((myp) => (
                        <a href={myp.url} target='blank' rel='noopener noreferrer' key={myp.name} className='projects-link-card'>
                            <img src={myp.image} alt={myp.name} className='projects-img' />
                        </a>
                    ))}
                </div>

                <div className="back-div">
                    <a href="#projectTop" className="project-top">
                        ↑ Back to Top
                    </a>
                </div>
            </motion.div>
        </>

    );
}