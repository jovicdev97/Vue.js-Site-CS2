<template>
  <div class="fire">
    <div class="fire-left">
      <div class="main-fire"></div>
      <div class="particle-fire"></div>
    </div>
    <div class="fire-center">
      <div class="main-fire"></div>
      <div class="particle-fire"></div>
    </div>
    <div class="fire-right">
      <div class="main-fire"></div>
      <div class="particle-fire"></div>
    </div>
    <div class="fire-bottom">
      <div class="main-fire"></div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  background-color: #111;
}
@keyframes scaleUpDown {
  0%, 100% { transform: scaleY(1) scaleX(1); }
  50%, 90% { transform: scaleY(1.1); }
  75% { transform: scaleY(0.95); }
  80% { transform: scaleX(0.95); }
}
@keyframes shake {
  0%, 100% { transform: skewX(0) scale(1); }
  50% { transform: skewX(5deg) scale(0.9); }
}
@keyframes particleUp {
  0% { opacity: 0; }
  20%, 80% { opacity: 1; }
  100% { opacity: 0; top: -100%; transform: scale(0.5); }
}
@keyframes glow {
  0%, 100% { background-color: #9932CC; }
  50% { background-color: #FF69B4; }
}
.fire {
  position: relative;
  top: calc(50%);
  left: calc(50%);
  width: 80px;
  height: 80px;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
}
.fire-center {
  position: absolute;
  height: 100%;
  width: 100%;
  animation: scaleUpDown 3s ease-out;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.fire-center .main-fire {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(farthest-corner at 10px 0, #9932CC 0%, #FF69B4 95%);
  transform: scaleX(0.8) rotate(45deg);
  border-radius: 0 40% 60% 40%;
  filter: drop-shadow(0 0 10px #8B008B);
}
.fire-center .particle-fire {
  position: absolute;
  top: 60%;
  left: 45%;
  width: 10px;
  height: 10px;
  background-color: #FF69B4;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px #FF69B4);
  animation: particleUp 2s ease-out 0;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.fire-right {
  height: 100%;
  width: 100%;
  position: relative;
  animation: shake 2s ease-out 0;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  .main-fire {
    position: absolute;
    top: 15%;
    right: -25%;
    width: 80%;
    height: 80%;
    background-color: #9932CC;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #8B008B);
  }
  .particle-fire {
    position: relative;
    top: 45%;
    left: 50%;
    width: 15px;
    height: 15px;
    background-color: #FF69B4;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #FF69B4);
    animation: particleUp 2s ease-out 0;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
}
.fire-left {
  position: relative;
  width: 100%;
  animation: shake 3s ease-out 0;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  .main-fire {
    position: relative;
    width: 80%;
    height: 80%;
    background-color: #9932CC;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #8B008B);
  }
  .particle-fire {
    position: relative;
    background-color: #FF69B4;
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #FF69B4);
    animation: particleUp 3s infinite ease-out 0;
    animation-fill-mode: both;
  }
}
.fire-bottom .main-fire {
  position: absolute;
  top: 90%;
  left: 5%;
  background-color: #9932CC;
  transform: scaleX(0.8) rotate(45deg);
  border-radius: 0 40% 100% 40%;
  filter: blur(10px);
  animation: glow 2s ease-out 0;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  margin: auto;
}
</style>