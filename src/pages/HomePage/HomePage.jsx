import "./HomePage.style.css";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import WelcomeSection from "./WelcomeSection";
import MenuSection from "./MenuSection";
import AboutSection from "./AboutSection";
import NewsSection from "./NewsSection";
import DealsSection from "./DealsSection";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="page_content">
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
