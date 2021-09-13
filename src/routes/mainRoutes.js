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
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "courses",
    path: "/courses",
    exact: false,
    component: lazy(() =>
      import("../pages/CoursesPage" /* webpackChunkName: "CoursesPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
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
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "tasks",
    path: "/tasks",
    exact: true,
    component: lazy(() =>
      import("../pages/TasksPage" /* webpackChunkName: "TasksPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "admin",
    path: "/admin",
    exact: false,
    component: lazy(() =>
      import("../pages/AdminPage/AdminPage" /* webpackChunkName: "AdminPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "signup",
    path: "/signup",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage/AuthPage" /* webpackChunkName: "AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "signin",
    path: "/signin",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage/AuthPage" /* webpackChunkName: "AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
