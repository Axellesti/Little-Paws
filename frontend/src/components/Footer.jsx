import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <footer>
      <div className="footer_container">
        <img
          src={`${URL}/public/assets/images/logo_grand.png`}
          alt="logo_little_paws"
        />
        <div className="links_container">
          <Link to="/" type="button">
            Home
          </Link>
          <Link to="/" type="button">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
