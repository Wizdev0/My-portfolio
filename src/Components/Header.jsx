import './Header.css';
import { Link } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';


export function Header({ darkMode, setDarkMode }) {


    return (
        <>
            <div className="header-links">
                <div className="hero-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>


            
        </>


    );
}