// React
import { lazy } from "react";
// Models
import { Route } from "../interfaces/routes/routeModel";

// Lazy Routes
// Home
const Home = lazy(
  () =>
    import(/* webpackChunkName: "Home" */ "../components/features/Home/Home")
);
// Selection
const Selection = lazy(
  () =>
    import(
      /* webpackChunkName: "Selection" */ "../components/features/Selection/Selection"
    )
);
// My Reservations
const MyReservations = lazy(
  () =>
    import(
      /* webpackChunkName: "MyReservation" */ "../components/features/MyReservations/MyReservations"
    )
);
// Confirm Data
const ConfirmData = lazy(
  () =>
    import(
      /* webpackChunkName: "ConfirmData" */ "../components/features/ConfirmData/ConfirmData"
    )
);

export const routes: Route[] = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/selection",
    component: Selection,
    name: "selection",
  },
  {
    path: "/my-reservations",
    component: MyReservations,
    name: "my-reservations",
  },
  {
    path: "/confirm-data",
    component: ConfirmData,
    name: "confirm-data",
  },
];
