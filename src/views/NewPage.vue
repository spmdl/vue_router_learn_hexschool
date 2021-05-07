<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          子路由 A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          子路由 B
        </router-link>
        <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-action">
          命名視圖 a2b
        </router-link>
        <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action">
          命名視圖 c2a
        </router-link>
        <router-link to="/newpage/dynamicRouter/fea8be3e64777240"
          class="list-group-item list-group-item-action">
          動態路由($route)
        </router-link>
        <router-link to="/newpage/dynamicRouterByProps/fea8be3e64777240"
          class="list-group-item list-group-item-action">
          動態路由(props)
        </router-link>
        <router-link to="/newpage/login" class="list-group-item list-group-item-action">
          登入驗證成功
        </router-link>
        <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action">
          路由導覽
        </router-link>
      </div>
    </div>
    <!-- <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in" appear>
        <div class="col-8">
          <component :is="Component" />
        </div>
      </transition>
    </router-view> -->
    <div class="col-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<style lang="scss">
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
