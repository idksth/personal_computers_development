import { createWebHistory, createRouter } from "vue-router";
// импорт компонентов
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";
import MainContent from "../components/MainContent.vue";

// определяем маршруты
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'main',
        component: MainContent,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
      }/*,
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
      },*/
    ],
  })
  
  export default router