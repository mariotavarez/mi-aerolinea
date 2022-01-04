// React
import { Suspense } from "react";
// React Router
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// Routes
import { routes } from "../../../routes/routes";

export const Main = () => {
  return (
    <Suspense fallback={<span>Cargando....</span>}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ component: Component, path }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
