import ApiClient from '@/services/ApiClient.js'

export default {
  getMessages() {
    return ApiClient.get('/realtors/101/messages')
  }
}