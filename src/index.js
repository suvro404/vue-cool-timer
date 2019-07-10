import VueCoolTimer from './components/VueCoolTimer.vue';

export default {
    install(Vue, options) {
        Vue.component("vue-cool-timer", VueCoolTimer);
    }
};