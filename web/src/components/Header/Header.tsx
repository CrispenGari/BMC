import "./Header.css";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <Image className="header__logo" alt="BMC" src="/adaptive-icon.png" />
      </Link>

      <div className="header__socials">
        <Link to={"#"}>
          <BsTwitterX />
        </Link>
        <Link
          to={
            "https://www.instagram.com/bri8minds?igsh=M2E0eDFpZzd5NXd3&utm_source=qr"
          }
        >
          <img alt="ig-logo" src="/ig.png" className="header__social__ig" />
        </Link>
        <Link to={"https://www.facebook.com/profile.php?id=61576909550247#"}>
          <FaFacebook className="header__social__facebook" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
