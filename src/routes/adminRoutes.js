import { lazy } from "react";

export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: true,
    component: lazy(() => import("../Components/courses/courseRedactor/CourseRedactor")),
  },
  {
    name: "groups",
    path: "/groups",
    exact: true,
    component: () => <h2>Groups</h2>,
  },
];
