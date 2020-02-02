<template>
  <div>
    <message-list />
    <message-details />
  </div>
</template>

<script>
import MessageList from '@/components/messages/MessageList.vue'
import MessageDetails from '@/components/MessageDetails.vue'

export default {
  components: {
    MessageList,
    MessageDetails
  }  
}
</script>

