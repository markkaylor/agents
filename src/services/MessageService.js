import ApiClient from '@/services/ApiClient.js'

export default {
  getMessages(realtorId) {
    return ApiClient.get('/realtors/'+realtorId+'/messages')
  },
  getMessage(messageId) {
    return ApiClient.get('/realtors/101/messages'+messageId)
  }
}