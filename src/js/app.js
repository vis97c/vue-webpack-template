// Log message
console.log('%c###%c Made with ❤ using Vue.js\n%c##%c  Developed & mantained by @vis97c\n%c#%c   Get in touch with me on Twitter or GitHub',
  'background:#f1c40f;color:transparent;padding:3px 0', 'padding:3px 0',
  'background:#2980b9;color:transparent;padding:3px 0', 'padding:3px 0',
  'background:#e74c3c;color:transparent;padding:3px 0', 'padding:3px 0');

window.$ = window.jQuery = require('jquery');
import Vue from 'vue';
import * as svgicon from 'vue-svgicon';
import router from './views'
import App from './App.vue';

require('./compiled-icons');
Vue.use(svgicon);


Vue.config.productionTip = false

var app = new Vue({
  router,
  render: h => h(App),
}).$mount('#appex');