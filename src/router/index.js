import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/HomeLayout.vue"),
    children: [
      {
        path: "/create",
        name: "CreateProject",
        component: () => import("../views/CreateProject.vue"),
      },
      {
        path: "/import",
        name: "ImportProject",
        component: () => import("../views/ImportProject.vue"),
      },
      {
        path: "/projects",
        name: "ProjectsList",
        component: () => import("../views/ProjectsList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
