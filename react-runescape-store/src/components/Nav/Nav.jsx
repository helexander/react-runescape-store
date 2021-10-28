import { Link } from "react-router-dom";
import "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/">
						<span className="nav-item--text">Home</span>
					</Link>
				</li>
			</ul>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-item--text" to="/" style={{ marginRight: 20 }}>
							Saved Items
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-item--text" to="/">
							Cart
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
