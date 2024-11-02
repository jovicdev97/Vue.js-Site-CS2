<template>
    <div v-if="!_cookiesZugestimmt" class="cookie-consent">
    <p>ded-community.de und das Forum unter forum.ded-community.de verwenden Cookies. Auf ded-community.de kommen nur technisch notwendige Cookies zum Einsatz. Im Forum werden auch personalisierte und Analyse-Cookies verwendet. Bei Ihrem ersten Besuch werden Sie darüber informiert. Details finden Sie unter:
    <a href="https://ded-community.de/datenschutz" target="_blank">Datenschutz</a>
    <a href="https://forum.ded-community.de/datenschutz" target="_blank">Forum Datenschutz</a>
    <a href="https://ded-community.de/impressum" target="_blank">Impressum</a>
    Sie können Ihre Cookie-Einstellungen im Forum jederzeit über unser Consent-System anpassen. Bei Fragen kontaktieren Sie uns bitte über die angegebenen Kontaktkanäle. Mit einem Klick auf OK bestätigen Sie, unsere Datenschutz- und Cookie-Hinweise gelesen und akzeptiert zu haben.
    </p>
           <button @click="cookiesZustimmen" class="bg-black m-2">Zustimmen</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'CookiePopup',
    setup() {
        const _store = useStore();
        const _cookiesZugestimmt = computed(function () {
            return _store.getters.getCookiesZugestimmt;
        });
        function cookiesZustimmen() {
            _store.commit('setCookiesZugestimmt', true);
            localStorage.setItem('cookiesZugestimmt', 'true');
        }
        return {
            _cookiesZugestimmt,
            cookiesZustimmen
        };
    }
});
</script>
<style scoped>
.cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(143, 16, 128);
    padding: 1em;
    text-align: center;
    z-index: 1000;
}
.bg-black {
    background-color: black;
    padding: 3px;
    border: solid 1px;
}
</style>