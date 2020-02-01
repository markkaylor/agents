<template>
  <div
    class="list-container" 
    v-if="message.messages">
    <div
      v-for="message in sortedMessages"
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
    ...mapState(['message']),
    /**
     * TODO: Turn this into a getter
     */
    sortedMessages() {
      const messages = this.message.messages
      return messages.sort((a,b) => b.read - a.read)
    }
  },
  components: {
    MessageCard,
  }  
}
</script>


