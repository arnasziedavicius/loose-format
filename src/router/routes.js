import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'

// route-level code splittings
const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
    children: [
      {
        name: 'info',
        path: 'info',
        component: InfoView
      }
    ]
  },
  {
    name: 'item',
    path: '/:slug',
    component: HomeView
  },
  {
    name: '404',
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

export default routes
