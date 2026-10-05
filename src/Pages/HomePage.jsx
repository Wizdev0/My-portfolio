import { Header } from '../Components/Header';
import { HeroSection } from '../Components/HeroSection';
import { About } from '../Components/About';
import './HomePage.css'
import { Skill } from '../Components/Skill';
import { Projects } from '../Components/Projects';
import { Footer } from '../Components/Footer';

export function HomePage() {

    
    return (
        <>
            <div className="header-comp">
                <Header />
            </div>
            
            <main className='main'>
                <HeroSection />
                <About />
                <Skill />
                <Projects />
                <Footer />
            </main>
            

            
        </>
    );
}