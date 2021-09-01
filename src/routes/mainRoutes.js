import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import CoursesPage from "../pages/CoursesPage";
import GroupsPage from "../pages/GroupsPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "courses",
    path: "/courses",
    exact: true,
    component: CoursesPage,
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
    component: GroupsPage,
  },
  {
    name: "admin",
    path: "/admin",
    exact: false,
    component: AdminPage,
  },
  {
    name: "signup",
    path: "/signup",
    exact: true,
    component: AuthPage,
  },
  {
    name: "signin",
    path: "/signin",
    exact: true,
    component: AuthPage,
  },
];
