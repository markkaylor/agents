import RealtorService from '@/services/RealtorService.js'

export const state = {
  realtors: [],
}

export const mutations = {
  SET_REALTORS(state, realtors) {
    state.realtors = Object.values(realtors)
  }
}

export const actions = {
  fetchRealtors({ commit }) {
    RealtorService.getRealtors() 
      .then(response => {
        commit('SET_REALTORS', response.data)
      })
  }
}

export const getters = {
 
}