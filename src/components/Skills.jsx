import './Skills.css'
export const Skills = () => {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div className="skills-container">
                <div className="technical-skills">
                    <h3>Técnicas</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="soft-skills">
                    <h3>Blandas</h3>
                    <ul>
                        <li>Comunicación asertiva</li>
                        <li>Trabajo en equipo</li>
                        <li>Resolución de problemas</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}