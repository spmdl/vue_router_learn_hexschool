import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'routerNavigation',
        meta: {
          needLogin: false,
        },
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        beforeEnter(to, from, next) {
          if (from.meta.needLogin) {
            next();
          } else {
            next(false);
          }
        },
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log(route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue'),
            },
            meta: { transition: 'slide-left' },
          },
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },
            meta: { transition: 'slide-right' },
          },
        ],
      },
    ],
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newpage/:pathMatch(.*)*',
    redirect: '/',
    // redirect: {
    //   name: '新增頁面',
    // },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    // `to` 和 `from` 都是路由地址
    // `savedPosition` 可以为空，如果没有的话。
    let res = {};
    if (savedPosition) { // 透過瀏覽器的前進、後退按鈕切換路由時，可以使用 savedPosition 取得上次位置
      res = savedPosition;
    } else if (to.fullPath.match('newpage')) {
      res = { left: 0, top: 0, behavior: 'smooth' };
    }
    return res;
  },
});

// 當路由開始進入之前，會執行此函式
// router.beforeEach((to, from, next) => {
//   console.log('from=', from.fullPath, ' | to=', to.fullPath, '\n meta：', to.meta.needLogin);
//   if (from.meta.needLogin !== undefined) {
//     console.log('get needLogin', from.meta.needLogin === true);
//     if (from.meta.needLogin === true) {
//       next();
//     } else {
//       next(false);
//     }
//   } else {
//     next();
//   }
// });

export default router;
