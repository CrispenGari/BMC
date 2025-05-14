import { Badge, Box, Heading, HStack, Text } from "@chakra-ui/react";
import "./Footer.css";
const Footer = () => {
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
        <Box mt={"3"} mb={10}>
          <Text color={"white"} fontSize={".9rem"}>
            Phone
          </Text>
          <HStack mt="0" flexWrap={"wrap"}>
            <Badge userSelect={"auto"} className="team__badge__email">
              +27 69 414 8634
            </Badge>

            <Badge userSelect={"auto"} className="team__badge__phone">
              +27 65 230 5879
            </Badge>
          </HStack>{" "}
        </Box>
      </div>
      <p>
        © {new Date().getFullYear()} Bright Minds Tutorship(BMT). All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
