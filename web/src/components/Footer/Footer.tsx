import { Badge, Box, Heading, HStack, Text } from "@chakra-ui/react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const whatsapp = () => {
    const text = `Hello Bright Minds Centre Team! I'd like book for your services.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/27682589269?text=${encodedText}`, "_blank");
  };

  return (
    <div className="footer">
      <div className="footer__main">
        <Heading color={"white"} mb={0}>
          Contact Us
        </Heading>
        <Box mt={"3"}>
          <Text color={"white"} fontSize={".9rem"}>
            Email
          </Text>
          <HStack mt="0" flexWrap={"wrap"}>
            <Badge userSelect={"auto"} className="team__badge__email">
              rindaigari@gmail.com
            </Badge>
            <Badge userSelect={"auto"} className="team__badge__phone">
              crispengari@gmail.com
            </Badge>
          </HStack>
        </Box>
        <Box mt={"3"}>
          <Text color={"white"} fontSize={".9rem"}>
            Phone
          </Text>
          <HStack mt="0" flexWrap={"wrap"}>
            <Badge userSelect={"auto"} className="team__badge__email">
              +27 68 258 9269
            </Badge>

            <Badge userSelect={"auto"} className="team__badge__phone">
              +27 65 230 5879
            </Badge>
          </HStack>{" "}
        </Box>
        <Box mt={"3"} mb={10}>
          <Text color={"white"} fontSize={".9rem"}>
            Socials
          </Text>
          <HStack
            className="footer__socials"
            mt="3"
            flexWrap={"wrap"}
            style={{ gap: 20, display: "flex" }}
          >
            <Link to={"#"}>
              <BsTwitterX />
            </Link>
            <Link
              to={
                "https://www.instagram.com/bri8minds?igsh=M2E0eDFpZzd5NXd3&utm_source=qr"
              }
            >
              <img alt="ig-logo" src="/ig.png" className="footer__social__ig" />
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=61576909550247#"}
            >
              <FaFacebook className="footer__social__facebook" />
            </Link>
            <FaWhatsapp
              onClick={whatsapp}
              className="footer__social__whatsapp"
            />
          </HStack>{" "}
        </Box>
      </div>
      <p>
        © {new Date().getFullYear()} Bright Minds Centre(BMC). All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
