import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
        {
      path: '/changelog',
      name: 'Changelog',
      component: () => import('../views/ChangelogView.vue')
    },
            {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../views/ImpressumView.vue')
    },
                {
      path: '/dataprivacy',
      name: 'Data Privacy',
      component: () => import('../views/DataPrivacyView.vue')
    },
  ]
});
export default router;