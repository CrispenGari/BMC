import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Us from "../../components/Us/Us";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <div className="home__main">
        <About />
        <Team />
        <Services />
        <Us />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
