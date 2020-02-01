import MessageService from '@/services/MessageService.js'

export const state = {
  message: {},
  messages: [],
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
  SET_MESSAGE(state, message) {
    state.message = message
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
  },
  // fetchMessage({ commit }, id) {
  //   const message = getters.getMessageById(id)
    
  //   if (message) {
  //     commit('SET_MESSAGE', message)
  //   } else {
  //     MessageService.getMessage(id)
  //     .then(response => )
  //   }
  // }
}

export const getters = {
  getMessageById: state => id => {
    return state.messages.find(message => message.id === id)
  }
}