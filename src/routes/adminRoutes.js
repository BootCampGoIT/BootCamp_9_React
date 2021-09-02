import { lazy } from "react";

export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: true,
    component: lazy(() => import("../Components/courses/Courses")),
  },
  {
    name: "groups",
    path: "/groups",
    exact: true,
    component: () => <h2>Groups</h2>,
  },
];
