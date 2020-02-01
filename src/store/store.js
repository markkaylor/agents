import Vue from 'vue'
import Vuex from 'vuex'
import * as message from '@/store/modules/message.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message,
  }
})