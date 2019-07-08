import VueCoolTimer from './components/VueCoolTimer.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('vue-cool-timer', VueCoolTimer);
    }
};