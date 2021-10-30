import { Container, Navbar } from "react-bootstrap"
const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ marginTop: "30px" }}>
                <Container className="justify-content-center">
                    &copy; Jeremy Chee
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer
