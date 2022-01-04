// Styles
import footer from "./Footer.module.scss";
// Models
import { IconModel } from "../../../interfaces/icons/IconsModel";
// Data
import { SOCIAL_MEDIA_DATA } from "../../../data/footer/socialMedia.data";

/**
 * @author Mario Tavarez
 * @date 03/01/2021
 * @type Layout
 * @description Footer Component
 * @returns
 */
export const Footer = () => {
  // Get Full Year
  const year = new Date().getFullYear();
  // Social Media Icons
  const socialMedia = SOCIAL_MEDIA_DATA.map(({ icon }, index) => (
    <span key={index}>{icon}</span>
  ));

  return (
    <footer className={footer.container_footer}>
      {/* FOLLOW US */}
      <div className={footer.follow_us}>
        <p>Siguenos en</p>
      </div>
      {/* FOLLOW US */}
      {/* SOCIAL MEDIA */}
      <div className={footer.social_media}>{socialMedia}</div>
      {/* SOCIAL MEDIA */}
      {/* COPYRIGHT */}
      <div className={footer.copyright}>
        <p>
          Copyright {year} © MiAerolinea.com. Todos los derechos reservados.
        </p>
      </div>
      {/* COPYRIGHT */}
    </footer>
  );
};
