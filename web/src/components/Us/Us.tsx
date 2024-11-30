import "./Us.css";
import { Card, Heading, List } from "@chakra-ui/react";
import {
  LuCheckCircle,
  LuComputer,
  LuDollarSign,
  LuPersonStanding,
} from "react-icons/lu";
const Us = () => {
  return (
    <div className="us">
      <Card.Root className="us__card" size="sm" flexWrap={"wrap"}>
        <Card.Header>
          <Heading size="md">Why Choose Us?</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <List.Root>
            <List.Item>
              <List.Indicator asChild color="green.500">
                <LuCheckCircle />
              </List.Indicator>
              Proven Expertise: Years of experience tutoring students at
              different academic levels.
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="green.500">
                <LuComputer />
              </List.Indicator>
              Flexible Learning: Online sessions tailored to your schedule and
              pace.
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="green.500">
                <LuDollarSign />
              </List.Indicator>
              Affordable Rates: Quality education at competitive prices.
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="green.500">
                <LuPersonStanding />
              </List.Indicator>
              Student Success Stories: Testimonials from satisfied students and
              parents.
            </List.Item>
          </List.Root>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default Us;
