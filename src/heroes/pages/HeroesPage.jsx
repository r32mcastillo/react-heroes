import { NavLink, Outlet } from "react-router-dom"
import { Footer, Loader, Navbar } from "../../ui"
export const HeroesPage = () => {
	return (
		<>
		<Loader/>
		<div className="contenedor">
			<Navbar/>
			<section className="main-container">
				<Outlet />
			</section>
			<Footer/>
		</div>
		</>
	)
}
