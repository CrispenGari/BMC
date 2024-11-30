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
            <Heading mb="0" mt={"2"} fontSize={"lg"}>
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
    image: "rindai.jpg",
    name: "Rindai Garidzirai",
    email: "rindaigari@gmail.com",
    phoneNumber: "+27 69 414 8634",
    position: "Lead Tutor and Research Mentor",
    biograph:
      "Rindai Garidzirai is an experienced educator specializing in Mathematics, Sciences, and advanced statistical methods. With a passion for mentoring students, Rindai leads the team in delivering top-quality tutoring and research assistance to high school and university learners.",
  },
  {
    id: 1,
    image: "crispen.png",
    name: "Tinashe Crispen Garidzira",
    email: "crispengari@gmail.com",
    phoneNumber: "+27 65 230 5879",
    position: "Tutor and Technology Specialist",
    biograph:
      "Tinashe Crispen Garidzira is an accomplished tutor with expertise in Computer Science, Machine Learning, and Programming. Tinashe combines deep technical knowledge with a focus on student success, helping learners achieve academic and professional growth.",
  },
];
