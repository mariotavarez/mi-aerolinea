// Styles
import "./App.scss";
// Layout
import { Navbar, Footer } from "./components/layout";
// Components
import { Main } from "./components/layout/main/Main";

const MyAeroline = () => {
  return (
    <div className="main_container">
      <div className="navbar">
        {/* NAVBAR */}
        <Navbar />
      </div>
      {/* NAVBAR */}
      <div className="main">
        <Main />
      </div>
      {/* FOOTER */}
      <div className="footer">
        <Footer />
      </div>
      {/* FOOTER */}
    </div>
  );
};

export default MyAeroline;
