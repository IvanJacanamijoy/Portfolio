import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { Container } from "react-bootstrap"

export const Home = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Container>
                <Header />
                <Skills />
                <Projects />
            </Container>
            <Footer/>
        </div>
    )
}