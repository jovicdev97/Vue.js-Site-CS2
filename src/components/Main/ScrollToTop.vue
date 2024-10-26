<template>
  <div v-if="isVisible" @click="scrollToTop" class="scroll-to-top">
    <i class="fas fa-arrow-up"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.toggleVisibility);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.toggleVisibility);
  },
  methods: {
    toggleVisibility() {
      this.isVisible = window.pageYOffset > 200;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>
<style scoped>
.scroll-to-top {
  z-index: 101;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background: linear-gradient(45deg, #9932CC, #FF69B4);
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255,105,180,0.5);
}
.scroll-to-top i {
  color: white;
  font-size: 24px;
}
</style>