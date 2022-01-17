import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/views/menu'
import Nino from '@/views/nino'
import Nina from '@/views/nina'
import Contactos from '@/views/contactos'

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
    }
  ]
})
