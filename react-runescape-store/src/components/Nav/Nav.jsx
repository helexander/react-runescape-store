import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>
			</ul>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to="/" style={{ marginRight: 20 }}>
							Catalogue
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">Cart</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
