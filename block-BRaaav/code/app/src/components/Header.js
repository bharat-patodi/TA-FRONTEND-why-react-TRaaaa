import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return(
            <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="www.github.com">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul className="flex nav-menu nav-menu-primary">
              <li>
                <a href="www.github.com">Home</a>
              </li>
              <li>
                <a href="www.github.com">About</a>
              </li>
              <li>
                <a href="www.github.com">Blog</a>
              </li>
              <li>
                <a href="www.github.com">Our Work</a>
              </li>
              <li>
                <a href="www.github.com">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex nav-menu nav-menu-secondary">
            <li className="social-media-item">
              <a href="www.github.com"><FontAwesomeIcon icon={faCoffee} /></a>
            </li>
            <li className="social-media-item">
              <a href="www.github.com"><FontAwesomeIcon icon={faCoffee} /></a>
            </li>
            <li className="social-media-item">
              <a href="www.github.com"><FontAwesomeIcon icon={faCoffee} /></a>
            </li>
            <li>
              <a className="btn btn-primary" href="www.github.com"> Sign in / Join </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Header;