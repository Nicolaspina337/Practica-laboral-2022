import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/views/menu'
import Nino from '@/views/nino'
import Nina from '@/views/nina'
import Contactos from '@/views/contactos'
import Nino2page from '@/views/nino2page'
import Despachos from '@/views/despachos'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/menu'
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/nino',
      name: 'nino',
      component: Nino
    },
    {
      path: '/nina',
      name: 'nina',
      component: Nina
    },
    {
      path: '/contactos',
      name: 'contactos',
      component: Contactos
    },
    {
      path: '/nino2page',
      name: 'nino2page',
      component: Nino2page
    },
    {
      path: '/despachos',
      name: 'despachos',
      component: Despachos
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
