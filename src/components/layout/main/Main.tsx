// Styles
import main from "./Main.module.scss";
// React
import { Suspense } from "react";
// React Router
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// Routes
import { routes } from "../../../routes/routes";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
// Shared
import { Loading } from "../../shared";

export const Main = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className={main.main_container}>
          <div className={main.navbar}>
            {/* NAVBAR */}
            <Navbar />
          </div>
          {/* NAVBAR */}
          <div className={main.main}>
            <Routes>
              {routes.map(({ component: Component, path }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[0].path} replace />}
              />
            </Routes>
          </div>
          {/* FOOTER */}
          <div className={main.footer}>
            <Footer />
          </div>
          {/* FOOTER */}
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
