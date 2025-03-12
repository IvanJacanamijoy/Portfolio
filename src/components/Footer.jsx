import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
export const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col>
                        <p className="mb-0">© 2023 Mi Portafolio. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}