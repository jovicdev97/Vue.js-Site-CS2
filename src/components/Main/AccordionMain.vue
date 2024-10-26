<script setup lang="ts">
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue'
import Timeline from './AccordionTimeline.vue'
import Progress from './AccordionProgress.vue'
import AccordionWiki from './AccordionWiki.vue'
import ScrollToTop from './ScrollToTop.vue';
</script>
<template>
   <div class="container pt-4 pb-4">
   <ScrollToTop/>
    <Accordion flush>
    <accordion-panel>
      <accordion-header>Roadmap</accordion-header>
      <accordion-content>
        <div>
        <Timeline/>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>Server Installation</accordion-header>
      <accordion-content>
        <div>
        <h1>Jail</h1>
               <Progress/>
                       <h1>TTT</h1>
                <Progress/>
                        <h1>Surf</h1>
                 <Progress/>
                         <h1>Arena</h1>
                  <Progress/>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
  </div>
</template>
<style scoped>
.farbe1 {
  background-color: #121212;
  color: #FFFFFF;
  transition: all 0.3s ease;
}
.accordion-header:hover {
  background-color: #0d0d0d;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
}
</style>