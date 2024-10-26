<template>
    <div class="p-4">
        <Accordion always-open class="mb-4">
            <accordion-panel v-for="entry in displayedEntries" :key="entry.id">
                <accordion-header class="text-lg font-semibold">
                    {{ entry.title }}
                </accordion-header>
                <accordion-content>
                    <div>
                        <Progress :progress="entry.progress" color="blue" label="Progress"></Progress>
                        <Alert type="info" class="mt-4 mb-2">Info: wir suchen LUA Entwickler. Bei Interesse bitte per DM melden.</Alert>
                        <Timeline>
                            <timeline-item>
                                <timeline-point>
                                </timeline-point>
                                <timeline-content>
                                    <timeline-time>
                                        {{ entry.time }}
                                    </timeline-time>
                                    <timeline-title class="text-white">
                                        {{ entry.title }}
                                    </timeline-title>
                                    <timeline-body>
                                        {{ entry.body }}
                                    </timeline-body>
                                </timeline-content>
                            </timeline-item>
                        </Timeline>
                    </div>
                </accordion-content>
            </accordion-panel>
        </Accordion>
        <button @click="loadMore" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Mehr laden
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue';
import { Progress } from 'flowbite-vue';
import { Alert } from 'flowbite-vue';
import { Timeline, TimelineItem, TimelinePoint, TimelineTime, TimelineContent, TimelineTitle } from 'flowbite-vue';
const changelogEntries = [
    { id: 1, time: 'Winter', title: 'Jail: Maprelease', body: 'Maprelease von unserem Mapper mit 16 Spielen, 9 Secret Rooms und 2 Teleportern.', progress: 67 },
    { id: 2, time: 'Frühling', title: 'TTT: neue Traitoritems', body: 'Shop-Overhowl für Traitor und viele neue Waffen, darunter 4 neue Traitorguns.', progress: 95 },
        { id: 3, time: 'Sommer', title: 'Surf: Gunsystem', body: 'Gunsystem für Arena mit Progress.', progress: 27 },
    { id: 4, time: 'Herbst', title: 'Warmup: Ranking Plugin', body: 'Eigenes Rankingplugin mit Anbindung an Discord.', progress: 60 },
        { id: 5, time: 'Winter', title: 'Jail: Maprelease', body: 'Maprelease von unserem Mapper mit 16 Spielen, 9 Secret Rooms und 2 Teleportern.', progress: 67 },
    { id: 6, time: 'Frühling', title: 'TTT: neue Traitoritems', body: 'Shop-Overhowl für Traitor und viele neue Waffen, darunter 4 neue Traitorguns.', progress: 95 },
    { id: 7, time: 'Sommer', title: 'Surf: Gunsystem', body: 'Gunsystem für Arena mit Progress.', progress: 27 },
    { id: 8, time: 'Herbst', title: 'Warmup: Ranking Plugin', body: 'Eigenes Rankingplugin mit Anbindung an Discord.', progress: 60 },
];
const displayedEntries = ref(changelogEntries.slice(0, 2));
const entriesPerLoad = 2;
const loadMore = () => {
    const currentLength = displayedEntries.value.length;
    const newEntries = changelogEntries.slice(currentLength, currentLength + entriesPerLoad);
    displayedEntries.value = [...displayedEntries.value, ...newEntries];
};
</script>
<style scoped>
</style>