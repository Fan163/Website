import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  // app_URL: 'http://192.168.10.137:8081/hoxJK/',
  // app_URL: 'http://192.168.10.194:8081/hoxJK/',
  app_URL: 'http://www.smart-hox.com:8081/hoxJK/',
  curMenuIdx: 0,
  menuList: [],
  secondMenuItem: []
}
// actions
const actions = {
  changeCurMenu ({commit, state}, ID) {
    commit('setCurMenu', ID)
  },
  changemenuList ({commit, state}, menuList) {
    commit('setmenuList', menuList)
  },
  changeSecondMenuItem ({commit, state}, item) {
    commit('SecondMenuItem', item)
  }
}

// mutations
const mutations = {
  setCurMenu (state, Idx) {
    state.curMenuIdx = Idx
  },
  setmenuList (state, menuList) {
    state.menuList = menuList
  },
  SecondMenuItem (state, item) {
    state.secondMenuItem = item
  }
}

export default new Vuex.Store({
  state,
  modules: {
  },
  actions,
  mutations,
  strict: debug
})
