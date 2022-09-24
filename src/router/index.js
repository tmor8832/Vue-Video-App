import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContactPage.vue'
import VideoPlayer from '../views/VideoPlayer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ContactPage',
    name: 'Contact',
    component: Contact
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for ../views/Contact.vue
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/VideoPlayer',
    name: 'VideoPlayer',
    component: VideoPlayer
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for ../views/Contact.vue
    // which is lazy-loaded when the route is visited.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
