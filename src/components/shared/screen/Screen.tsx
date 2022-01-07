// Prop Types
import PropTypes from "prop-types";
// Styles
import screen from "./Screen.module.scss";
// Share
import { Search } from "../search/Search";
// Models
import { ScreenModel } from "../../../interfaces/screen/ScreenModel";

/**
 * @author Mario Tavarez
 * @date 03/01/2022
 * @type Shared
 * @description Screen Component, this component render an image background with search element
 * @param param0
 * @returns
 */
export const Screen = ({ img, title }: ScreenModel) => {
  return (
    <div className={screen.container_screen}>
      <div
        className={`${screen.title} animate__animated animate__fadeInDownBig`}
      >
        {/* TITLE */}
        <strong>{title}</strong>
        {/* TITLE */}
      </div>
      {/* IMAGE SCREEN CONTAINER */}
      <div className={`${screen.img_screen}`}>
        {/* SEARCH */}
        <div className={`${screen.search}`}>
          <Search />
          {/* <h5>SEARCH</h5> */}
        </div>
        {/* SEARCH */}
      </div>
      {/* IMAGE SCREEN CONTAINER */}
    </div>
  );
};

// Prop Types
Screen.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
