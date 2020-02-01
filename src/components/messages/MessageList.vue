<template>
  <div
    class="container" 
    v-if="message.messages">
    <div
      v-for="message in message.messages"
      :key="message.id"
    >
      <message-card :message="message" />
    </div>
  </div>
</template>

<script>
import MessageCard from '@/components/messages/MessageCard.vue'
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('fetchMessages')
  },
  computed: {
    ...mapState(['message'])
  },
  components: {
    MessageCard
  }  
}
</script>

