import "./HomePage.style.css";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import WelcomeSection from "./WelcomeSection";
import MenuSection from "./MenuSection";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="PageContent">
        <WelcomeSection />
        <MenuSection />
        <div>about</div>
        <div>check menu</div>
        <div>special offer</div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
