import CinemaSyncLogo from "../CinemaSync-logo.png";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img className="mainLogo" src={CinemaSyncLogo} alt="CinemaSync Logo" />
      <h1>CinemaSync</h1>
    </div>
  );
}
