import Vue from 'vue'
const eventBus = {}
eventBus.install = function(vue){
    Vue.prototype.$bus = new Vue();
}
Vue.use(eventBus)