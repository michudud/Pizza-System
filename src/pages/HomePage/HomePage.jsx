import "./HomePage.style.css";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import WelcomeSection from "./WelcomeSection";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <div className="PageContent">
        <WelcomeSection />
        <div>about</div>
        <div>check menu</div>
        <div>special offer</div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
