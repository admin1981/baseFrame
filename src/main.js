import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
/*引用全局组件*/
import './components/index'
/*引用css*/
import './assets/css/style.css'
/*引用filters  过滤*/
import './filters'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});


