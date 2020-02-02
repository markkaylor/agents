import MessageService from '@/services/MessageService.js'

export const state = {
  showingMessage: false,
  message: null,
  messages: [],
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
  SET_MESSAGE(state, message) {
    state.message = message
  },
  SET_SHOWING_MESSAGES(state) {
    state.showingMessage = !state.showingMessage
  }
}

export const actions = {
  fetchMessages({ commit, getters }) {
    MessageService.getMessages()
    .then(response => {
      console.log(response.data)
      commit('SET_MESSAGES', response.data)
      console.log(getters.getUnreadMessageCount)
    })
    .catch(error => {
      console.log('There was an error fetching the messages' + error)
    })
  },
  fetchMessage({ commit, getters }, id) {
    const message = getters.getMessageById(id)
    if (message) {
      console.log('no need for api')
      commit('SET_MESSAGE', message)
    } 
  },
  showingMessage({ commit }) {
    commit('SET_SHOWING_MESSAGES')
  },
}

export const getters = {
  getMessageById: state => id => {
    return state.messages.find(message => message.id === id)
  },
  getUnreadMessageCount: state => {
    return state.messages.filter(message => message.read === true).length
  },
}