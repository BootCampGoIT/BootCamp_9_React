import { lazy } from "react";
// import ProfilePage from "../pages/ProfilePage";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    name: "courses",
    path: "/courses",
    exact: false,
    component: lazy(() =>
      import("../pages/CoursesPage" /* webpackChunkName: "CoursesPage" */)
    ),
  },
  // {
  //   name: "profile",
  //   path: "/profile",
  //   exact: true,
  //   component: ProfilePage,
  // },
  {
    name: "groups",
    path: "/groups",
    exact: true,
    component: lazy(() =>
      import("../pages/GroupsPage" /* webpackChunkName: "GroupsPage" */)
    ),
  },
  {
    name: "admin",
    path: "/admin",
    exact: false,
    component: lazy(() =>
      import("../pages/AdminPage/AdminPage" /* webpackChunkName: "AdminPage" */)
    ),
  },
  {
    name: "signup",
    path: "/signup",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage/AuthPage" /* webpackChunkName: "AuthPage" */)
    ),
  },
  {
    name: "signin",
    path: "/signin",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage/AuthPage" /* webpackChunkName: "AuthPage" */)
    ),
  },
];
