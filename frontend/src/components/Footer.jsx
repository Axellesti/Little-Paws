import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <footer>
      <div className="footer_container">
        <Link to="/">
          <button className="bottom_icon_1" type="button">
            <img src={`${URL}/public/assets/images/home_grey.svg`} alt="home" />
          </button>
        </Link>
        <span className="spanLine"> </span>
        <Link to="/">
          <button className="bottom_icon_2" type="button">
            <img
              src={`${URL}/public/assets/images/book_grey.svg`}
              alt="articles"
            />
          </button>
        </Link>
        <span className="spanLine"> </span>
        <Link to="/">
          <button className="bottom_icon_3" type="button">
            <img
              src={`${URL}/public/assets/images/chat_grey.svg`}
              alt="messages"
            />
          </button>
        </Link>
        <span className="spanLine"> </span>
        <Link to="/profile">
          <button className="bottom_icon_4" type="button">
            <img
              src={`${URL}/public/assets/images/person_grey.svg`}
              alt="profile"
            />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
