import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    // don't scroll if scrolltop param set to false
    if (!to.params.scrolltotop) return {}
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})
