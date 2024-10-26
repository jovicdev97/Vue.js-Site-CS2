<template>
  <div class="relative z-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white neon-glow">
    <div class="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between">
      <div class="flex items-center space-x-4">
        <a href="https:
          class="transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src="@/assets/discord.png" alt="Discord"
            class="icon-glow w-8 transform hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
        <a href="https:
          class="transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src="@/assets/steam.png" alt="Steam"
            class="icon-glow w-8 transform hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
      </div>
      <RouterLink to="/" style="display: inline-block; margin: 0; padding-right: 0%; padding-left:1.5%">
        <MyLogo v-if="!isMobile" />
      </RouterLink>
  <div class="menu-links ml-6">
    <a href="https:
    <a href="https:
  </div>
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu">
          <svg :class="{ 'rotate': isOpen }"
            class="w-6 h-6 text-white transform transition-transform ease-in-out duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="w-full md:hidden mt-2 animate__animated animate__fadeIn">
        <a href="https:
    <a href="https:
      </div>
    </div>
</div></template>
<script>
import MyLogo from './MyLogo.vue';
export default {
  components: {
    MyLogo
  },
  data() {
    return {
       isOpen: false,
      isMobile: window.innerWidth <= 768
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkIfMobile);
      this.checkIfMobile();
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>
<style scoped>
.neon-glow::before,
.neon-glow::after {
  content: "";
  position: absolute;
  bottom: -10px;
  height: 1px;
  box-shadow:
    0 0 5px rgba(255, 105, 180, 0.7),
    0 0 10px rgba(255, 105, 180, 0.7),
    0 0 15px rgba(153, 50, 204, 0.7),
    0 0 20px rgba(153, 50, 204, 0.7),
    0 0 25px rgba(153, 50, 204, 0.7),
    0 0 35px rgba(153, 50, 204, 0.7);
}
.neon-glow::before {
  left: 0;
  width: calc(50% - 0.5%);
  background: linear-gradient(45deg, #9932CC, #FF69B4);
}
.neon-glow::after {
  right: 0;
  width: calc(50% - 1.3%);
  background: linear-gradient(45deg, #FF69B4, #9932CC);
}
@media (max-width: 1000px){
.neon-glow::after {
  right: 0;
  width: calc(50% + 0.1%);
  background: linear-gradient(45deg, #FF69B4, #9932CC);
}
}
@media (max-width: 768px) {
  .neon-glow::before,
  .neon-glow::after {
    display: none;
  }
}
.rotate {
  rotate: 90deg;
}
@media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
}
.logo-link {
  text-decoration: none;
}
.icon-container {
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
}
@keyframes glowing-ring {
  0% {
    border-color: rgba(255, 105, 180, 1);
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
  }
  50% {
    border-color: rgba(153, 50, 204, 1);
    box-shadow: 0 0 10px rgba(153, 50, 204, 0.7);
  }
  100% {
    border-color: rgba(255, 105, 180, 1);
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
  }
}
.icon-glow {
  border: 1.5px solid rgba(255, 105, 180, 1);
  border-radius: 50%;
  animation: glowing-ring 3s infinite alternate;
}
.menu-links {
  display: flex;
  align-items: center;
}
</style>