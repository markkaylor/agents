import ApiClient from '@/services/ApiClient.js'

export default {
  getMessages() {
    return ApiClient.get('/realtors/101/messages')
  },
  getMessage(messageId) {
    return ApiClient.get('/realtors/101/messages'+messageId)
  }
}