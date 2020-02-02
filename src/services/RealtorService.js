import ApiClient from '@/services/ApiClient.js'

export default {
  getRealtors() {
    return ApiClient.get('/realtors')
  },
  // getMessage(messageId) {
  //   return ApiClient.get('/realtors/101/messages'+messageId)
  // }
}