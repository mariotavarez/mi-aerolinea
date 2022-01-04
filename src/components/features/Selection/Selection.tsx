// Styles
import selection from "./Selection.module.scss";
// Shared
import { Screen } from "../../shared/screen/Screen";
import { CardAeroline } from "../../shared";

const Selection = () => {
  return (
    <div className={selection.container_selection}>
      {/* SCREEN */}
      <div className={selection.screen}>
        <Screen
          img={
            "https://firebasestorage.googleapis.com/v0/b/miaerolinea-23192.appspot.com/o/miaerolinea%2Fbanners%2Fbanner-3.jpg?alt=media&token=c21ce65e-a044-4de8-9ff5-6ef2f9fc953b"
          }
          title={"Contamos con una gran cantidad de viajes"}
        />
      </div>
      {/* SCREEN */}
      {/* CARD AEROLINE */}
      <div className="card_aeroline">
        <CardAeroline />
      </div>
      {/* CARD AEROLINE */}
    </div>
  );
};

export default Selection;
