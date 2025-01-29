import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          <ul className="nav-links" id="nav-links">
            <PageLinks />
          </ul>
          <ul className="nav-icons">
            <SocialLinks />
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
