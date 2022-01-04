// Shared
import { Paragraph, Screen, Search } from "../../shared";
// Styles
import home from "./Home.module.scss";
// Data
import { PARAGRAPH_DATA } from "../../../data/home/paragraph.data";

/**
 * @author Mario Tavarez
 * @date 03/01/2022
 * @description Home Component, this component show all available travels
 * @returns
 */
const Home = () => {
  // PARAGRAPH DATA THAT BUILD THE PARAGRAPH ESTRUCTURES
  const paragraph = PARAGRAPH_DATA.map(({ icon }, index) => (
    <Paragraph key={index} icon={icon} />
  ));

  return (
    <>
      {/* SCREEN */}
      <div className={home.screen}>
        <Screen
          img={
            "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Fbanners%2Fbanner-4.jpg?alt=media&token=2e0945f3-96a1-407d-a6a6-fcf597a68230"
          }
          title={"La mejor aerolínea de toda latinoamérica"}
        />
      </div>
      {/* SCREEN */}
      {/* PARAGRAPH */}
      <div className={home.paragraph}>{paragraph}</div>
      {/* PARAGRAPH */}
    </>
  );
};

export default Home;
