import Navbar from "../components/navbar";
import Title from "../components/title";
import Features from "../components/features";
import Signup from "../components/signup";
import About from "../components/about";
import Contact from "../components/contact";

// Home Page

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <Features/>
      <Signup/>
      <About/>
      <Contact/>
    </div>
  );
};

export default HomePage;
