import { createRouter, createWebHistory } from 'vue-router';
import MaintenanceView from '../views/MaintenanceView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MaintenanceView, // use () => import() - to lazy load
    },
  ],
});

export default router;
