import "./Team.css";
import { Badge, Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

const Team = () => {
  return (
    <div className="team">
      {team.map((member) => (
        <Box className="team__member">
          <Image
            className="team__image"
            objectFit={"cover"}
            src={member.image}
            alt={member.name}
          />
          <Box>
            <Heading mb="0" mt={"2"} fontSize={"lg"} color={"black"}>
              {member.name}
            </Heading>
            <Heading color="fg.muted" mb="0" mt={"0"} fontSize={"small"}>
              {member.position}
            </Heading>
            <Text color="fg.muted" fontWeight="lighter" fontSize={"xs"}>
              {member.biograph}
            </Text>
            <HStack mt="4" flexWrap={"wrap"}>
              <Badge userSelect={"auto"} className="team__badge__email">
                {member.email}
              </Badge>
              <Badge userSelect={"auto"} className="team__badge__phone">
                {member.phoneNumber}
              </Badge>
            </HStack>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Team;

const team = [
  {
    id: 0,
    image: "rindai.png",
    name: "Rindai Garidzirai",
    email: "rindaigari@gmail.com",
    phoneNumber: "+27 69 414 8634",
    position: "Lead Tutor and Research Mentor",
    biograph:
      "An experienced educator with over 5 years of expertise in Mathematics, Sciences, and advanced statistical methods. Known for a strong commitment to mentorship and academic excellence, this team member plays a leading role in guiding both high school and university students through their tutoring and research journeys.",
  },
  {
    id: 1,
    image: "crispen.png",
    name: "Tinashe Crispen Garidzira",
    email: "crispengari@gmail.com",
    phoneNumber: "+27 65 230 5879",
    position: "Tutor and Technology Specialist",
    biograph:
      "With more than 5 years of experience in Computer Science, Machine Learning, and Programming, this team member brings a blend of technical expertise and a passion for student development. Focused on practical learning, they help learners build strong foundations and achieve their academic goals.",
  },
];
