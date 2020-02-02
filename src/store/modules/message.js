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
  SET_SHOWING_MESSAGE(state) {
    state.showingMessage = !state.showingMessage
  },
  TOGGLE_MESSAGE_READ(state) {
    state.message.read = !state.message.read
  }
}

export const actions = {
  fetchMessages({ commit }, realtorId) {
    MessageService.getMessages(realtorId)
    .then(response => {
      commit('SET_MESSAGES', response.data)
    })
    .catch(error => {
      console.log('There was an error fetching the messages' + error)
    })
  },
  fetchMessage({ commit, getters }, id) {
    const message = getters.getMessageById(id)
    if (message) {
      commit('SET_MESSAGE', message)
    } 
  },
  showingMessage({ commit }) {
    commit('SET_SHOWING_MESSAGE')
  },
  toggleMessageRead({ commit }) {
    commit('TOGGLE_MESSAGE_READ')
  }
}

export const getters = {
  getMessageById: state => id => {
    return state.messages.find(message => message.id === id)
  },
  sortedMessages: state => {
    return state.messages.sort((a,b) => b.read - a.read)
  },
  unreadMessageCount: state => {
    return state.messages.filter(message => message.read === true).length
  }
}