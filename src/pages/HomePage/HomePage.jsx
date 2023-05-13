import "./HomePage.style.css";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import WelcomeSection from "./WelcomeSection";
import MenuSection from "./MenuSection";
import NewsSection from "./NewsSection";
import AboutSection from "./AboutSection";
import DealsSection from "./DealsSection";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="PageContent">
        <WelcomeSection />
        <MenuSection />
        <AboutSection />
        <NewsSection />
        <DealsSection />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
