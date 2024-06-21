
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import FurniturePage from '../pages/FurniturePage.vue';
import BlogPage from '../pages/BlogPage.vue';
import ContactPage from '../pages/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  {path:'/furniture',component:FurniturePage},
  {path:'/blog',component:BlogPage},
  {path:'/contact',component:ContactPage}
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
