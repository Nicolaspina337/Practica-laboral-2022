import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/views/menu'

import Nino from '@/views/nino'
import Camuflaje from '@/views/camuflaje'
import Nube from '@/views/nube'


import Nina from '@/views/nina'


import Contactos from '@/views/contactos'
import Despachos from '@/views/despachos'
import Login from '@/views/login'
import Register from '@/views/register'
import Menuser from '@/views/menuser'
import Pedidos from '@/views/pedidos'
import Direcciones from '@/views/direcciones'
import Carrito from '@/views/Carrito'

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
      component: Nino,
    },
    {
      path: '/camuflaje',
      name: 'camuflaje',
      component: Camuflaje
    },
    {
      path: '/nube',
      name: 'nube',
      component: Nube
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
      path: '/despachos',
      name: 'despachos',
      component: Despachos
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/menuser',
      name: 'menuser',
      component: Menuser
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos
    },
    {
      path: '/direcciones',
      name: 'direcciones',
      component: Direcciones
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: Carrito
    }
  ]
})
