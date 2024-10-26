<template>
  <div class="bg-dark custommarginpadding">
    <select v-model="selectedGroup" class="group-select">
  <option class="justify-center" value="">Show all servers</option>
  <option value="us">US Server</option>
  <option value="eu">EU Server</option>
  <option value="utopia">Utopia</option>
  <option value="nyx">Nyx</option>
  <option value="kitsune">Kitsune</option>
  <option value="mesa">Mesa</option>
  <option value="rookie">Rookie</option>
  <option value="haven">Haven</option>
  <option value="nation">Nation</option>
  <option value="easysurf">EASYSurf</option>
  <option value="paradise">Paradise</option>
  <option value="ace">Ace</option>
  <option value="uncapped">Uncapped</option>
  <option value="germany">Germany</option>
</select>
    <div class="grid" :class="{ 'grid-cols-1': isMobile }" :style="{ 'gap': '1rem' }">
      <div v-for="(server, index) in filteredServers" :key="index"
   :class="['card', 'border', 'p-4', 'rounded-md', 'transition-transform', 'hover:shadow-lg', 'hover:scale-105', {'no-description': !server.description}]">
        <img v-if="server.banner" :src="server.banner" alt="Server Banner" class="hidden md:block pb-3">
        <h3 class="text-2xl font-semibold text-light mb-2 flex items-center">
          {{ server.name[language] }}
        </h3>
        <p v-if="server.description" class="text-sm text-gray mb-4">{{ server.description[language] }}</p>
        <div class="flex justify-between items-center">
          <button v-if="!isMobile" class="mr-2 button button-purple hidden md:inline-block" @click.stop="connectToServer(server.connectLink)">
            Connect
          </button>
          <p class="text-xs font-semibold" v-if="server.status[language] === 'ONLINE'">{{ statusTexts[language].ONLINE }}</p>
          <p class="text-xs font-semibold" v-else>{{ statusTexts[language].OFFLINE }}</p>
          <div :class="{
            'status-indicator': true,
            'online': server.status[language] === 'ONLINE',
            'offline': server.status[language] === 'OFFLINE'
          }"></div>
                    <div v-for="(flagPath, flagIndex) in getFlagImagePaths(server.flag)" :key="`flag-${flagIndex}`">
            <img :src="flagPath" alt="Flag" class="w-3 h-3 m-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import serverData from "../../res/kacheln_json/kacheln_de.json";
export default {
  data() {
    return {
      servers: [],
      selectedGroup: '',
      language: "de",
      statusTexts: {
        de: {
          ONLINE: "Live",
          OFFLINE: "In Dev"
        },
        en: {
          ONLINE: "Live",
          OFFLINE: "In Dev"
        }
      },
      isMobile: false
    };
  },
  created() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener("resize", this.updateMobileStatus);
    this.servers = this.flattenServers(serverData);
  },
  unmounted() {
    window.removeEventListener("resize", this.updateMobileStatus);
  },
  computed: {
    filteredServers() {
    if (!this.selectedGroup) return this.servers;
    switch (this.selectedGroup) {
      case 'US':
        return this.servers.filter(server => server.flag.includes('usa'));
      case 'EU':
        return this.servers.filter(server => server.flag.includes('eu'));
      case 'EASY':
        return this.servers.filter(server =>
          server.name.de.toLowerCase().includes('easy') ||
          server.name.en.toLowerCase().includes('easy')
        );
      default:
        return this.servers.filter(server =>
          server.name.de.toLowerCase().includes(this.selectedGroup.toLowerCase()) ||
          server.name.en.toLowerCase().includes(this.selectedGroup.toLowerCase())
        );
    }
  }
  },
  methods: {
    getFlagImagePaths(flag) {
    if (!flag) return ["/euflag.png"];
    const flags = flag.split(" ");
    if (flags.length > 1) {
      return ["/euflag.png"];
    } else {
      return flags.map(flagKey => {
        switch (flagKey) {
          case 'german':
            return "/germanflag.png";
          case 'usa':
            return "/usaflag.png";
          default:
            return "/euflag.png";
        }
      });
    }
  },
    flattenServers(data) {
      let flattened = [];
      for (const group in data) {
        const servers = data[group];
        for (const key in servers) {
          const server = servers[key];
          server.group = group;
          flattened.push(server);
        }
      }
      return flattened;
    },
    connectToServer(link) {
      window.location.href = link;
    },
    updateMobileStatus() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>
<style scoped>
.bg-dark {
  background-color: #121212;
}
.text-light {
  color: #FFFFFF;
}
.text-gray {
  color: #B0B0B0;
}
.group-select {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
}
.bg-dark {
  background-color: #121212;
}
.text-light {
  color: #FFFFFF;
}
.text-gray {
  color: #B0B0B0;
}
.button {
  display: inline-block;
  padding: 5px 10px;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 10px #FF69B4;
}
.button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(255, 78, 80, 0.6);
}
.button-purple {
  background: linear-gradient(45deg, #9932CC, #FF69B4);
  color: #fff;
}
.button-purple:hover {
  background: linear-gradient(45deg, #FF69B4, #9932CC);
}
.card {
  background-size: cover;
  background-position: center;
  background-color: #1e1e1e;
  border: 1px solid #333;
  transition-duration: 0.3s;
  flex: 1 1 200px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.card:hover {
  border-color: #555;
}
.card img {
  max-width: 100%;
  height: auto;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}
.card-footer {
  margin-top: auto;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #1e1e1e;
  color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.modal-body {
  padding: 20px;
}
.modal-image {
  max-width: 100%;
  height: auto;
}
.extra-info {
}
.modal-footer {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.fullscreen-modal-content {
  background-color: #1e1e1e;
  color: #FFFFFF;
  width: 100%;
  max-width: 1000px;
  margin:auto;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.fullscreen-modal-header,
.fullscreen-modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fullscreen-modal-body {
  padding: 20px;
}
  .fullscreen-modal-content {
    max-height: 90vh;
    background: linear-gradient(135deg, #2C2C2C 0%, #1e1e1e 100%);
    color: #F1F1F1;
    border: 1px solid #444;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  .fullscreen-modal-header {
    background: linear-gradient(45deg, #9932CC, #FF69B4);
    color: #fff;
    padding: 10px 20px;
    font-size: 1.5em;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .tab {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
.tab button {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 16px 24px;
    font-size: 1.2em;
    color: #B0B0B0;
    transition: 0.3s;
  }
  .tab button:hover {
    background-color: #333;
    color: #fff;
  }
  .fullscreen-modal-section {
    padding: 20px;
    border-bottom: 1px solid #444;
  }
  .fullscreen-modal-section:last-child {
    border-bottom: none;
  }
  .fullscreen-modal-section h4 {
    border-bottom: 2px solid #FF69B4;
  }
  .action-button {
    padding: 12px 20px;
    border-radius: 6px;
    background-color: #FF69B4;
    color: #fff;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
    margin: 10px;
  }
  .action-button:hover {
    background-color: #FF3E75;
    transform: translateY(-2px);
  }
  h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1em;
}
.active-tab {
  background-color: #333;
  color: #fff;
}
.tab button:hover,
.active-tab:hover {
  background-color: #444;
  color: #fff;
}
.custommarginpadding {
    margin-top: 4rem;
    margin-bottom: 4rem;
}
@media screen and (max-width: 768px) {
  .bg-dark {
    margin-top: 0;
  }
}
.container {
  margin-top: 0;
}
.icon-color {
    color: #a2a2a2;
  }
  .grid {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
}
.button.button-purple {
    padding: 13px 26px;
    font-size: 13px;
    border-radius: 8px;
    width: 50%;
    box-sizing: border-box;
}
.status-indicator {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}
@keyframes glow-online {
  0%, 100% {
    box-shadow: 0 0 0 0 #0bd43a;
  }
  50% {
    box-shadow: 0 0 3px 0.5px #0bd43a;
  }
}
@keyframes glow-offline {
  0%, 100% {
    box-shadow: 0 0 0 0 #ff0000;
  }
  50% {
    box-shadow: 0 0 3px 0.5px #ff0000;
  }
}
.online {
  background-color: #0bd43a;
  animation: glow-online 1s ease-in-out infinite;
}
.offline {
  background-color: #ff0000;
  animation: glow-offline 2s ease-in-out infinite;
}
.bg-dark {
    background-color: #121212;
  }
  .text-light {
    color: #E0E0E0;
  }
  .group-select {
    background-color: #333;
    color: #fff;
  }
  .no-description {
  min-height: 200px;
}
@media (max-width: 768px) {
    .button.button-purple {
        max-width: 30%;
    }
}
</style>