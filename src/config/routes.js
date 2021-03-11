import { lazy } from "react";

import PrivateRoute from "./PrivateRoute.component";
import ProtectedRoute from "./ProtectedRoute";

export const routes = {
  login: {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/login/Login")),
    type: ProtectedRoute,
  },
  explorer: {
    name: "Explorer",
    path: "/explorer",
    component: lazy(() => import("../pages/explorer/Explorer")),
    type: PrivateRoute,
  },
  emptyRoute: {
    name: "DefautlRoute",
    path: "/",
    component: lazy(() => import("../pages/login/Login")),
    type: ProtectedRoute,
  },
};

export const renderRoutes = Object.entries(routes);
