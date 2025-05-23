import { useIsIOS } from "../../hooks";
import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const { isIOS } = useIsIOS();
  return (
    <div className={`banner ${isIOS ? "banner-ios" : ""}`}>
      <h1>Empowering Students to Achieve Academic Excellence</h1>
      <p>
        Expert Tutoring for High School and University Students in{" "}
        <span>
          <Typewriter
            words={[
              "Mathematics.",
              "Economics",
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
