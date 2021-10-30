import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import song from "../../misc/audio/osrsTheme.mp3";
import React, { useState, useRef } from "react";

const Navigation = ({ cartItems }) => {
	const [play, setPlay] = useState(false);
	const audioRef = useRef(new Audio(song));

	const togglePlay = () => {
		setPlay(!play);
	}

	play ? audioRef.current.play() : audioRef.current.pause();

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						alt=""
						src="./images/coins.png"
						className={`d-inline-block align-top ${styles.logoImage}`}
					/>
					{""}
					Le Grand XChange
				</Navbar.Brand>
				<Button variant="secondary" onClick={togglePlay} className={styles.navBtn} >
					{play ? <i className="fas fa-volume-up"></i> : <i className="fas fa-volume-mute"></i>}
				</Button>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/saved">
							Saved Items
						</Nav.Link>
						<Nav.Link as={Link} to="/cart">
							Cart <i class="fas fa-shopping-cart"></i>
							<span className={styles.cart}>
								{cartItems.length === 0 ? "" : cartItems.length}
							</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
