import RealtorService from '@/services/RealtorService.js'

export const state = {
  showingDropdown: false,
  realtors: [],
  realtor: null,
}

export const mutations = {
  SET_REALTORS(state, realtors) {
    state.realtors = Object.values(realtors)
  },
  SET_REALTOR(state, realtor) {
    state.realtor = realtor
  },
  SET_SHOWING_DROPDOWN(state) {
    state.showingDropdown = !state.showingDropdown
  },
}

export const actions = {
  fetchRealtors({ commit }) {
    RealtorService.getRealtors() 
      .then(response => {
        commit('SET_REALTORS', response.data)
      })
      .catch(error => {
        console.log('There was an error fetching the realtors' + error)
      })
  },
  fetchRealtor({ commit, getters }, id) {
    const realtor = getters.getRealtorById(id)
    if (realtor) {
      commit('SET_REALTOR', realtor)
    }
  },
  toggleDropdown({ commit }) {
    commit('SET_SHOWING_DROPDOWN')
  }
}

export const getters = {
  getRealtorById: state => id => {
    return state.realtors.find(realtor => realtor.id === id)
  }
}