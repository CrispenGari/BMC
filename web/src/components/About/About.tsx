import { Box, Button, Card, Heading, List } from "@chakra-ui/react";

import "./About.css";
import { LuCheckCircle } from "react-icons/lu";
const About = () => {
  return (
    <div className="about">
      <Card.Root
        className="about__card"
        size="sm"
        flexDirection="row"
        flexWrap={"wrap"}
        border={"none"}
      >
        <Box flex={1} style={{ minWidth: 300 }}>
          <Card.Header>
            <Heading size="md" color={"black"}>
              About Us
            </Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            BMT team has passionate educators dedicated to helping students
            excel in academics. With years of experience and a commitment to
            personalized learning, we provide comprehensive tutoring services
            for high school and university students.
          </Card.Body>
          <Card.Header mt={"-5"} className="">
            <Heading color={"black"} size="sm">
              Key Features
            </Heading>
          </Card.Header>
          <Card.Body>
            <List.Root gap="1" variant="plain" align="center">
              <List.Item color={"black"}>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Experienced tutors with advanced qualifications.
              </List.Item>
              <List.Item color={"black"}>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Support for assignments, research, and exam preparation.
              </List.Item>
              <List.Item color={"black"}>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Tailored lessons for individual needs.
              </List.Item>
            </List.Root>
          </Card.Body>
        </Box>
        <Box>
          <Card.Body>
            <Card.Title mb="2" color={"black"}>
              Call to Action
            </Card.Title>
            <Card.Description>Book Your Free Consultation</Card.Description>
          </Card.Body>
          <Card.Footer>
            <Button className="about__button">Book Now</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </div>
  );
};

export default About;
