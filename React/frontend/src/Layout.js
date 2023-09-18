import { Outlet, Link } from "react-router-dom";
import './index.css';

const Layout = () => {
	// el tag link es como el tag a, pero para react-router-dom, el to es como el href
	// el tag outlet es como el tag div, pero para react-router-dom

	//Armo una barra de navegación con estilos de CSS
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contratos">Contratos</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
};

export default Layout;