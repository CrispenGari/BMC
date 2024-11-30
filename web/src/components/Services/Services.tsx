import { Card, Box, Heading, List, Button } from "@chakra-ui/react";
import { LuBook, LuCheckCircle, LuGraduationCap } from "react-icons/lu";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <Card.Root
        className="services__card"
        size="sm"
        flexDirection="row"
        flexWrap={"wrap"}
      >
        <Box flex={1} style={{ minWidth: 300 }}>
          <Card.Header>
            <Heading size="lg">High School Tutoring Services</Heading>
          </Card.Header>
          <Card.Header mb={-2}>
            <Heading size="sm">Subjects We Cover</Heading>
          </Card.Header>
          <Card.Body>
            {Object.entries(
              services.highSchoolTutoringServices.subjectsWeCover
            ).map(([service, areas]) => (
              <List.Root key={service} gap="1" variant="plain" align="center">
                <List.Item fontSize={".9rem"}>
                  <List.Indicator asChild color="green.500">
                    <LuGraduationCap />
                  </List.Indicator>
                  {service}
                </List.Item>
                <List.Root ps="5">
                  {areas.map((area) => (
                    <List.Item fontSize={"0.8rem"}>
                      <List.Indicator asChild color="green.500">
                        <LuBook />
                      </List.Indicator>
                      {area}
                    </List.Item>
                  ))}
                </List.Root>
              </List.Root>
            ))}
          </Card.Body>
          <Card.Header mb={-2}>
            <Heading size="sm">What We Offer</Heading>
          </Card.Header>
          <Card.Body>
            <List.Root gap="1" variant="plain" align="center">
              {services.highSchoolTutoringServices.whatWeOffer.map((ele, i) => (
                <List.Item key={i} fontSize={".9rem"}>
                  <List.Indicator asChild color="green.500">
                    <LuGraduationCap />
                  </List.Indicator>
                  {ele}
                </List.Item>
              ))}
            </List.Root>
          </Card.Body>
        </Box>

        <Box flex={1} style={{ minWidth: 300 }}>
          <Card.Header>
            <Heading size="lg">University Tutoring Services</Heading>
          </Card.Header>
          <Card.Header mb={-2}>
            <Heading size="sm">Subjects We Cover</Heading>
          </Card.Header>
          <Card.Body>
            {Object.entries(
              services.universityTutoringServices.subjectsWeCover
            ).map(([service, areas]) => (
              <List.Root key={service} gap="1" variant="plain" align="center">
                <List.Item fontSize={".9rem"}>
                  <List.Indicator asChild color="green.500">
                    <LuGraduationCap />
                  </List.Indicator>
                  {service}
                </List.Item>
                <List.Root ps="5">
                  {areas.map((area) => (
                    <List.Item fontSize={"0.8rem"}>
                      <List.Indicator asChild color="green.500">
                        <LuBook />
                      </List.Indicator>
                      {area}
                    </List.Item>
                  ))}
                </List.Root>
              </List.Root>
            ))}
          </Card.Body>
          <Card.Header mb={-2}>
            <Heading size="sm">Additional Support</Heading>
          </Card.Header>
          <Card.Body>
            <List.Root gap="1" variant="plain" align="center">
              {services.universityTutoringServices.additionalSupport.map(
                (ele, i) => (
                  <List.Item key={i} fontSize={".9rem"}>
                    <List.Indicator asChild color="green.500">
                      <LuGraduationCap />
                    </List.Indicator>
                    {ele}
                  </List.Item>
                )
              )}
            </List.Root>
          </Card.Body>
        </Box>
      </Card.Root>
    </div>
  );
};

export default Services;

const services = {
  highSchoolTutoringServices: {
    subjectsWeCover: {
      Mathematics: ["Algebra", "Geometry", "Trigonometry", "Calculus"],
      Physics: ["Mechanics", "Electricity", "Magnetism"],
      Chemistry: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
      ],
      Biology: ["Human Anatomy", "Molecular Biology", "Genetics"],
    },
    whatWeOffer: [
      "Personalized study plans",
      "Exam preparation strategies",
      "Homework and project assistance",
    ],
  },
  universityTutoringServices: {
    subjectsWeCover: {
      Statistics: ["Regression", "Probability", "Data Analysis"],
      "Computer Science And Programming": [
        "Data Structures",
        "Algorithms",
        "Python",
        "Java",
        "JavaScript",
        "R",
        "& More",
      ],
      "Actuarial Science": ["Risk Assessment", "Financial Mathematics"],
      "MachineLearning And Deep Learning": [
        "Python libraries",
        "Neural Networks",
        "Applications",
      ],
    },
    additionalSupport: [
      "Research guidance (thesis/dissertation)",
      "Assignment help and coding assistance",
      "Capstone project mentorship",
    ],
  },
};
