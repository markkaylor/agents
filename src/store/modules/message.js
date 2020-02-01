import MessageService from '@/services/MessageService.js'

export const state = {
  message: {},
  messages: [],
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  }
}

export const actions = {
  fetchMessages({ commit }) {
    MessageService.getMessages()
    .then(response => {
      console.log(response.data)
      commit('SET_MESSAGES', response.data)
    })
    .catch(error => {
      console.log('There was an error fetching the messages' + error)
    })
  }
}