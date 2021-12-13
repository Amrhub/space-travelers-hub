import planet from '../planet.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <img src={planet} alt="planet-logo" />
        <h1>Space Tavelers&apos; Hub</h1>
      </div>
      <nav />
    </header>
  );
}

export default Header;
