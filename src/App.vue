<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Header/NavBar.vue"
import AppFooter from "./components/Footer/AppFooter.vue"
</script>
<template>
  <header>
    <Nav />
  </header>
  <div class="container mx-auto mt-4">
    <RouterView />
  </div>
  <AppFooter />
</template>
<style>
body {
  background-color: #121212;
  color: #FFFFFF;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  filter: blur(4px) brightness(0.5) contrast(0.5);
  z-index: 999;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  flex: 1;
}
@media screen and (max-width: 768px) {
.container {
  margin-top: 0;
}
}
</style>