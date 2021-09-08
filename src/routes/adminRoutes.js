import { lazy } from "react";

export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: false,
    component: lazy(() =>
      import("../Components/courses/courseRedactor/CourseRedactor")
    ),
  },
  {
    name: "groups",
    path: "/groups",
    exact: false,
    component: lazy(() =>
      import("../Components/groups/groupRedactor/GroupRedactor")
    ),
  },
];
