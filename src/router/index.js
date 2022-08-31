import {createRouter,createMemoryHistory} from 'vue-router'
import routes from '@/router/routes.js'

export default createRouter({
  history:createMemoryHistory(import.meta.env.BASE_URL),
  routes
})