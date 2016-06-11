import Vue from 'vue';
import App from './App';


window.vm = new Vue({
  el: 'body',
  components: { App },
  data: {
    title: ''
  },
  watch: {
    title (val) {
      document.title = val;
    }
  }
});

