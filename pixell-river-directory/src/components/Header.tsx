import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Pixell River Financial Logo" className="logo" />

      <div>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the employee and organization directory.</p>
      </div>
    </header>
  );
}

export default Header;