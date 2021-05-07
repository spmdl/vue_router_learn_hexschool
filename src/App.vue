<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"  class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link"
                :to="{
                  name: '新增頁面'
                }">新增頁面</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container" style="height: 300vh">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <router-view/> -->
    </div>
    <router-link to="/newpage/routerNavigation">/newpage/routerNavigation</router-link>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
body {
  padding-top: 80px;
  text-align:center;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
