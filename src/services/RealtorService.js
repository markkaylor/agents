import ApiClient from '@/services/ApiClient.js'

export default {
  getRealtors() {
    return ApiClient.get('/realtors')
  }
}