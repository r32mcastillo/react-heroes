import { Link, Outlet } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
export const LoginPage = () => {
  return (
	
    <div className="page">
        <section className="container">
            <nav className="navbar">
                <div className="navbar__content">
					<img className="logo" src="https://raw.githubusercontent.com/r32mcastillo/reactpractico/main/src/assets/logos/log.png" />
                    <ul>
                        <li><a href="">Exclusivos</a></li>
                        <li><a href="">Nuevos</a></li>
                        <li><a href="">Gift Cards</a></li>
                        <li>
						<Link className="mi_link"
                                to="/">
                                Home
						</Link>
						</li>
                    </ul>
                </div>
            </nav>
            <section className="main-content">
                <p>Aprende de tu</p>
                <h1>Súper Héroe!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam tenetur laboriosam, sequi
                    perspiciatis cupiditate deserunt nobis consequatur pariatur. Voluptates, atque ratione officia sit
                    voluptatem amet odit distinctio et delectus iusto!</p>

            </section>
            <section className="side-content">
                <div></div>
                <p>Superman</p>
                <img src="https://i.ibb.co/x16pz1x/super-man.png" alt="Superman"/>
            </section>
            <section className="footer">
                <div id="button1">
                    <img src="https://i.ibb.co/tKWqw8J/spiderman.png" alt="spiderman"/>
                </div>
                <div id="button2"><img src="https://i.ibb.co/Xzsdvgg/robin.png" alt="robin"/></div>
                <div id="button3"><img src="https://i.ibb.co/M18p91c/batman.webp" alt="batman"/></div>
            </section>
        </section>
        <section className="loader">
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>
  )
}
