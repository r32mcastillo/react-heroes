import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const onLogout =(e)=>{
        e?.preventDefault();
        navigate('/login',{
            replace:true
        });
    }
    return (
        <header className="main-header">
            <nav className="navbar__content">
                <div className="navbar-left">
                    <img className="logo" src="https://raw.githubusercontent.com/r32mcastillo/reactpractico/main/src/assets/logos/log.png" />
                    <ul>
                        <li>
                            <NavLink className="mi_link"
                                to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="mi_link"
                                to="/marvel">
                                Marvel
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="mi_link"
                                to="/dc">
                                DC
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="mi_link"
                                to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li><a href="/" onClick={onLogout}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
