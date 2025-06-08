import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: GalleryView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ]
})