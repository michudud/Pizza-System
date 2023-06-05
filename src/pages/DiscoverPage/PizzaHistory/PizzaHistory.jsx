import "./PizzaHistory.style.css";
import china from "./../../../assets/images/history/china.jpg";
import france from "./../../../assets/images/history/france.jpg";
import germany from "./../../../assets/images/history/germany.jpg";
import greece from "./../../../assets/images/history/greece.jpg";
import naples from "./../../../assets/images/history/naples.jpg";
import india from "./../../../assets/images/history/india.jpg";
import perisa from "./../../../assets/images/history/persia.jpg";
import rome from "./../../../assets/images/history/rome.jpg";

const allImg = [china, france, germany, greece, india, naples, perisa, rome];

const PizzaHistory = () => {
  return (
    <div className="PizzaHistory">
      <div className="background_imgs">
        {allImg.map((img) => {
          return <img className="bg_img" src={img} />;
        })}
      </div>
      <div className="content">
        <h1 className="title">Pizza History</h1>
        <div className="history">
          <p>
            A long time ago, in a kingdom far away... actually the history of
            pizza begins even earlier, in ancient times. It all started with
            different types of flatbread, which was baked in many forms by most
            cultures from that time. Records of people adding other ingredients
            to bread to make it more flavorful can be found throughout ancient
            history.
          </p>
          <ul className="flatbreads_list">
            <li>
              Persian soldiers as early as the 6th century BC, baked flatbreads
              on the surfaces of their shields. They used cheese and dates as
              toppings
            </li>
            <li>
              In Ancient Greece, citizens made a flatbread called plakous, which
              was flavored with toppings like herbs, onion, cheese and garlic.
            </li>
            <li>
              Manakish origin comes from the ancient Levant and more specific
              from Phoenicia (2500 BC - 539 BC) where people would make stone
              wheels and crush wheat into flour in order to make bread. Most
              popular topping was thyme, but cheese and ground meat were also
              used.
            </li>
            <li>
              In Catalonia and the area around it, people baked a cake called
              coca or fogassa. Cocas could be served in four different types:
              sweet, savory, open or closed. As regards the topping or filling,
              fish and vegetables are usual at the coast whilst inland they
              prefer fruit, nuts, cheese and meat.
            </li>
            <li>
              In Italian historical region - Romagna, people used to prepare
              Piadina which was usually made with white flour, lard or olive
              oil, salt and water. The dough was traditionally cooked on a
              terracotta dish.
            </li>
            <li>
              On the Asian continent, we can find several other similar
              flatbread dishes with toppings such as Chinese bing, Indian
              paratha, Central and South Asian naan and roti.
            </li>
            <li>
              Also worth noting is that throughout Europe, there are many
              similar pies based on the idea of covering flat pastry with
              cheese, meat, vegetables and seasoning, such as the Alsatian
              flammkuchen, German zwiebelkuchen, and French quiche.
            </li>
          </ul>
          <p>
            In 16th-century Naples, a galette flatbread was referred to as a
            pizza. It was known as a dish for poor people, particularly as
            street food, and was not considered a kitchen recipe until much
            later when Spanish brought the tomato from the Americas and
            developed the modern variation that Pizzas in their modern
            conception were invented.
          </p>
          <p>
            The innovation that led to flatbread pizza was the use of tomato as
            a topping. For some time after the tomato was brought to Europe from
            the Americas in the 16th century.
          </p>
          <p>
            The most popular and famous pizzas from Naples were the Marinara,
            created in 1734, and the Margherita, which dates from 1796-1810.
            Marinara has a topping of tomato, oregano, garlic, and extra virgin
            olive oil and Margharita is topped with modest amounts of tomato
            sauce, mozzarella, and fresh basil.
          </p>
          <p>
            Pizza evolved into a variety of bread and tomato dish often served
            with cheese. However, until the late 19th or early 20th century, the
            dish was sweet, not savory, and earlier versions that were savory
            resembled the flatbreads now known as schiacciata.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaHistory;
