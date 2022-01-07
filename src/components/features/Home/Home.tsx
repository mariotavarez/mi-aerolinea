// Shared
import { CardAeroline, Paragraph, Screen } from "../../shared";
// Styles
import home from "./Home.module.scss";
// React Redux
import { useDispatch, useSelector } from "react-redux";
// Data
import { PARAGRAPH_DATA } from "../../../data/home/paragraph.data";
// React Hooks
import { useEffect } from "react";
import { cleanTravels } from "../../../actions/travelsAction";

/**
 * @author Mario Tavarez
 * @date 03/01/2022
 * @description Home Component, this component show all available travels
 * @returns
 */
const Home = () => {
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // Clean the travels
    dispatch(cleanTravels());
  }, []);

  // PARAGRAPH DATA THAT BUILD THE PARAGRAPH ESTRUCTURES
  const paragraph = PARAGRAPH_DATA.map(({ icon }, index) => (
    <Paragraph key={index} icon={icon} />
  ));
  // Travels
  const { viajes } = useSelector((state: any) => state.travelsAction);

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
      {viajes ? (
        <div className={home.card_aeroline_home}>
          {viajes.map((viaje: any, index: any) => (
            <CardAeroline key={index} {...viaje} />
          ))}
        </div>
      ) : (
        <div
          className={`${home.paragraph} animate__animated animate__backInDown`}
        >
          {paragraph}
        </div>
      )}
      {/* CARD AEROLINE */}
    </>
  );
};

export default Home;
