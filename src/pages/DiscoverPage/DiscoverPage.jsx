import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OurPizza from "./OurPizza";
import PizzaHistory from "./PizzaHistory";
import "./DiscoverPage.style.css";

const DiscoverPage = () => {
  return (
    <div className="DiscoverPage">
      <Header />
      <div className="page_content">
        <OurPizza />
        <PizzaHistory />
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverPage;
