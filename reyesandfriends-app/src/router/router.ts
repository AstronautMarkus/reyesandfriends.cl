import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'

import ServicesList from '../pages/services/ServicesList.vue'
import LandingPages from '../pages/services/LandingPages/LandingPages.vue'
import CustomSoftware from '../pages/services/LandingPages/CustomSoftware.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesList,
    meta: { transition: 'slide-left' },
    children: [
      {
        path: 'landing-pages',
        name: 'LandingPages',
        component: LandingPages,
        meta: { transition: 'slide-right' },
      },
      {
        path: 'custom-software',
        name: 'CustomSoftware',
        component: CustomSoftware,
        meta: { transition: 'slide-right' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
