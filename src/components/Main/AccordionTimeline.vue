<script setup lang="ts">
import { Timeline, TimelineItem, TimelinePoint, TimelineTime, TimelineContent, TimelineTitle, TimelineBody } from 'flowbite-vue'
import gespeicherteSprache from '@/helper/getLanguage';
import de from '../../res/accordion_json/accordion_timeline_de.json';
import en from '../../res/accordion_json/accordion_timeline_en.json';
const languageData = gespeicherteSprache.getLanguage().startsWith("de") ? de : en;
</script>
<template>
  <div class="pl-2 pt-4">
    <div class="container">
      <Timeline>
        <timeline-item v-for="item in languageData.TimelineItems" :key="item.time">
          <timeline-point>
            <svg aria-hidden="true" class="w-2 h-2 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"></path>
            </svg>
          </timeline-point>
          <timeline-content>
            <timeline-time>
              {{ item.time }}
            </timeline-time>
            <timeline-title class="text-white">
              {{ item.title }}
            </timeline-title>
            <timeline-body>
              {{ item.body }}
            </timeline-body>
          </timeline-content>
        </timeline-item>
      </Timeline>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>