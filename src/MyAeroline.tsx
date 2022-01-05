// Styles
import "./App.scss";
// React Redux
import { Provider } from "react-redux";
// Store
import { store } from "./store/store";
// Layout
import { Main } from "./components/layout/main/Main";

const MyAeroline = () => {
  return (
    <>
      {/* REDUX PROVIDER */}
      <Provider store={store}>
        {/* MAIN */}
        <Main />
        {/* MAIN */}
      </Provider>
      {/* REDUX PROVIDER */}
    </>
  );
};

export default MyAeroline;
