import ApiClient from '@/services/ApiClient.js'

export default {
  getMessages(realtorId) {
    return ApiClient.get('/realtors/'+realtorId+'/messages')
  },
  getNextPage(payload) {
    return ApiClient.get('/realtors/'+payload.realtorId+'/messages?page='+payload.page)
  }
}