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
      {/* TITLE */}
      <h1>{title}</h1>
      {/* TITLE */}
      {/* IMAGE SCREEN CONTAINER */}
      <div className={screen.img_screen}>
        {/* IMG */}
        <img src={img} alt={title} />
        {/* IMG */}
        {/* SEARCH */}
        <div className={screen.search}>
          <Search />
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
