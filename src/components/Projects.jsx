import './Projects.css'
export const Projects = () => {
    return (
        <section id="projects">
            <h2>Proyectos Destacados</h2>
            <div className="project-card">
                <h3>Nombre del Proyecto 1</h3>
                <p>Descripción breve del proyecto y tecnologías utilizadas.</p>
                <a href="https://github.com/tu-usuario/proyecto1" target="_blank" rel="noopener noreferrer">
                    Ver en GitHub
                </a>
            </div>
            {/* Repite para otros proyectos */}
        </section>
    )
}