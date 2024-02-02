import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const DEFAULT_TITLE = 'Some Default Title'
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE
  next()
})

export default router
