import "./Nav.module.scss";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Le Grand XChange
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<Nav.Link as={Link} to="/">
							Saved Items
						</Nav.Link>
						<Nav.Link as={Link} to="/">
							Cart
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
