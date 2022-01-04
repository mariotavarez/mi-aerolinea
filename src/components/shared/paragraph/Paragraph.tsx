// Styles
import paragraph from "./Paragraph.module.scss";
// Prop Types
import PropTypes from "prop-types";

export const Paragraph = ({ icon }: any) => {
  return (
    <>
      {/* PARAGRAPH CONTAINER */}
      <div className={paragraph.paragraph_container}>
        {icon}
        <p className={paragraph.paragraph_content}>
          Do deserunt elit irure elit dolore consectetur dolor cupidatat ea
          dolore eiusmod aliqua ad. Fugiat non commodo qui est. Consectetur amet
          consequat mollit et incididunt. Duis irure dolor do commodo esse
          dolore duis sunt exercitation culpa.
        </p>
        <p className={paragraph.paragraph_content}>
          Do deserunt elit irure elit dolore consectetur dolor cupidatat ea
          dolore eiusmod aliqua ad. Fugiat non commodo qui est. Consectetur amet
          consequat mollit et incididunt. Duis irure dolor do commodo esse
          dolore duis sunt exercitation culpa.
        </p>
      </div>
      {/* PARAGRAPH CONTAINER */}
    </>
  );
};

Paragraph.propTypes = {
  icon: PropTypes.any.isRequired,
};
