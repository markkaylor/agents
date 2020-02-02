<template>
  <div>
    <h1 v-if="!realtor.realtor">Please Select A Realtor</h1>
    <message-list />
    <message-details />
  </div>
</template>

<script>
import MessageList from '@/components/messages/MessageList.vue'
import MessageDetails from '@/components/MessageDetails.vue'
import { mapState } from 'vuex' 

export default {
  components: {
    MessageList,
    MessageDetails
  },
  computed: {
    ...mapState(['realtor'])
  }  
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
