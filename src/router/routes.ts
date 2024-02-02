import DashboardPage from '../views/DashboardPage.vue'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage,
    meta: {
      title: 'My dashboard'
      // layout: 'AppLayout' - 2nd variant of layouts
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/OrdersPage.vue'),
    meta: { title: 'My orders' }
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../views/PaymentsPage.vue'),
    meta: { title: 'My payments' }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsPage.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('../views/ClientsPage.vue')
  },
  {
    path: '/metrics',
    name: 'metrics',
    component: () => import('../views/MetricsPage.vue')
  },
  {
    path: '/discounts',
    name: 'discounts',
    component: () => import('../views/DiscountsPage.vue')
  },
  {
    path: '/apps',
    name: 'apps',
    component: () => import('../views/AppsPage.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminPage.vue')
  },
  {
    path: '/online-store',
    name: 'online-store',
    component: () => import('../views/OnlineStorePage.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserPage.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('../views/NotificationsPage.vue')
  }
]
