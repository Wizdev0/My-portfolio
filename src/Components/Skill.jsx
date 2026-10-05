import './Skill.css';

export function Skill() {

    const myTools = [
        "HTML","CSS","JavaScript",
        "React Js","GIT","GitHub","Vercel","Vite"
    ]

    return(
        <section id="skills" className='skills-section'>
            <div className="skill-header">
                <h2 className="skill-head-h2">TOOLS & TECH</h2>
                <p className="skill-head-p">[My Stack]</p>
            </div>

            <div className="skill-main">
                {myTools.map((tools) => (
                    <p className='tools-box'>
                        {tools}
                    </p>
                ))}
            </div>

        </section>
    );
}