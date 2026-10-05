import './Projects.css';
import { projects } from '../projects';
import { Link } from "react-router";
import { motion } from 'motion/react';

export function Projects() {

    const featured = projects.slice(0, 2);


    return (
        <motion.section id="project" className='project-section'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
        >
            <div className="project-header">
                <p className="pro-head">
                    [Featured Projects]
                </p>
            </div>

            <div className="project-main">
                {featured.map((pro) => (
                    <a href={pro.url} target='blank' rel='noopener noreferrer' key={pro.name} className='project-card'>
                        <img src={pro.image} alt={pro.name} className='project-img' />
                    </a>
                ))}
            </div>

            <Link to="/projects" className="see-more">See more →</Link>
        </motion.section>
    );
}