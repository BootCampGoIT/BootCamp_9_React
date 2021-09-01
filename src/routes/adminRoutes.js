export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: true,
    component: () => <h2>Courses</h2>,
  },
  {
    name: "groups",
    path: "/groups",
    exact: true,
    component: () => <h2>Groups</h2>,
  },
];
