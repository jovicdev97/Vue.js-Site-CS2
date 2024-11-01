<template>
  <footer
    class="relative z-10 bg-gradient-to-r from-[#121212] to-[#0d0d0d] text-gray-300 py-12 neon-glow"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="p-4 rounded-md hover:shadow-lg transition-all duration-300">
          <h4 class="text-lg font-semibold text-white mb-3">The future of surf</h4>
          <div class="border-t-4 border-purple-600 w-full mt-3 mb-3"></div>
          <ul>
            <li><a href="http://example.com" class="hover:underline">Link 1</a></li>
            <li><a href="http://example.com" class="hover:underline">Link 2</a></li>
            <li><a href="http://example.com" class="hover:underline">Link 3</a></li>
            <li><a href="http://example.com" class="hover:underline">Link 4</a></li>
          </ul>
        </div>
        <div class="p-4 rounded-md hover:shadow-lg transition-all duration-300 md:block hidden">
          <h4 class="text-lg font-semibold text-white mb-3">Menu</h4>
          <div class="border-t-4 border-purple-600 w-full mt-3 mb-3"></div>
          <ul class="space-y-2">
            <div class="vertical-links">
              <RouterLink to="/" class="hover:underline">Home</RouterLink>
              <RouterLink to="/impressum" class="hover:underline">Imprint</RouterLink>
              <RouterLink to="/dataprivacy" class="hover:underline">Data Privacy</RouterLink>
              <a href="http://forum.cs2-surf.com/" target="_blank" class="text-white hover:text-gray-200">Forum</a>
            </div>
          </ul>
        </div>
        <div class="p-4 rounded-md hover:shadow-lg transition-all duration-300">
          <h4 class="text-lg font-semibold text-white mb-3">Community</h4>
          <div class="border-t-4 border-purple-600 w-full mt-3 mb-3 pb-3"></div>
          <div class="flex space-x-4">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="transform hover:scale-110 transition-transform duration-300">
              <img src="@/assets/steam.png" alt="Steam Icon" class="w-8" />
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="transform hover:scale-110 transition-transform duration-300">
              <img src="@/assets/discord.png" alt="Discord Icon" class="w-8" />
            </a>
          </div>
        </div>
        <div class="p-4 rounded-md hover:shadow-lg transition-all duration-300">
          <h4 class="text-lg font-semibold text-white mb-3">Soon:</h4>
          <div class="border-t-4 border-purple-600 w-full mt-3 mb-3"></div>
          <p>Surf Global Leaderboard Site</p>
          <p>Jailbreak Germany</p>
          <p>Warcraft 3 Mod [US/EU]</p>
          <p>Zombie Escape Reborn [EU]</p>
          <p>Kreedz KZ Climb [US/EU]</p>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-12 pt-6 text-center">
      <p class="text-sm">&copy; 2022-2023 CS2-SURF.COM & CS2-JAIL.DE - All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
<style scoped>
.neon-glow::before,
.neon-glow::after {
  content: "";
  position: absolute;
  top: 0;
  height: 1px;
  box-shadow: 0 0 5px rgba(255, 105, 180, 0.7),
    0 0 10px rgba(255, 105, 180, 0.7), 0 0 15px rgba(153, 50, 204, 0.7),
    0 0 20px rgba(153, 50, 204, 0.7), 0 0 25px rgba(153, 50, 204, 0.7),
    0 0 35px rgba(153, 50, 204, 0.7);
}
.neon-glow::before {
  left: 0;
  width: calc(50%);
  background: linear-gradient(45deg, #9932cc, #ff69b4);
}
.neon-glow::after {
  right: 0;
  width: calc(50%);
  background: linear-gradient(45deg, #ff69b4, #9932cc);
}
.vertical-links {
  display: flex;
  flex-direction: column;
}
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.border-purple-600 {
  border-color: #9932cc;
}
.border-pink-400 {
  border-color: #ff69b4;
}
.border-darkpurple {
  border-color: #8b008b;
}
.border-blue-400 {
  border-color: #1e90ff;
}
.bg-gradient-to-r.from-121212.to-0d0d0d {
  background: linear-gradient(to right, #121212, #0d0d0d);
}
</style>