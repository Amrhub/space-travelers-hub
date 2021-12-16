import { NavLink } from 'react-router-dom';
import planet from '../../assets/planet.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header-title">
      <img src={planet} alt="planet-logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <NavLink className="nav-link" to="/">
        Rockets
      </NavLink>
      <NavLink className="nav-link" to="/missions">
        Missions
      </NavLink>
      <NavLink className="nav-link" to="/profile">
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Header;
