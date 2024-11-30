import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="banner">
      <h1>Empowering Students to Achieve Academic Excellence</h1>

      <p>
        Expert Tutoring for High School and University Students in{" "}
        <span>
          <Typewriter
            words={[
              "Mathematics.",
              "Sciences.",
              "Statistics.",
              "Computer Science.",
              "and More.",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
    </div>
  );
};

export default Banner;
