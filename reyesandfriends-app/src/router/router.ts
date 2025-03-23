import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'

import ServicesList from '../pages/services/ServicesList.vue'
import LandingPages from '../pages/services/LandingPages/LandingPages.vue'
import CustomSoftware from '../pages/services/LandingPages/CustomSoftware.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade-in' },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesList,
    meta: { transition: 'fade-in' },
    children: [
      {
        path: 'landing-pages',
        name: 'LandingPages',
        component: LandingPages,
        meta: { transition: 'fade-in' },
      },
      {
        path: 'custom-software',
        name: 'CustomSoftware',
        component: CustomSoftware,
        meta: { transition: 'fade-in' },
      },
    ],
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { transition: 'fade-in' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { transition: 'fade-in' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { transition: 'fade-in' },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
