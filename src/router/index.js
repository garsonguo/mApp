import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/pages/info/Info'
import Home from '@/pages/home/Home'
import Contacts from '@/pages/contacts/Contacts'
import My from '@/pages/my/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/ajbl',
        component: Home
      }]
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
