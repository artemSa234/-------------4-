import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'
import Promotions from '../views/Promotions.vue'
import Services from '../views/Services.vue'
import Tariffs from '../views/Tariffs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/promotions', component: Promotions },
  { path: '/register', component: Register },
  { path: '/services', component: Services },
  { path: '/tariffs', component: Tariffs }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
