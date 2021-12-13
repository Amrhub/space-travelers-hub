import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header-title">
      <img src={planet} alt="planet-logo" />
      <h1>Space Tavelers&apos; Hub</h1>
    </div>
    <nav>
      <NavLink to="/rockets">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
