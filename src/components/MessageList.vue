<template>
  <div
    class="list-container"
    :class="showingMessage ? 'hide-list' : 'show-list'" 
    v-if="message.messages">
    <div
      v-for="message in sortedMessages"
      :key="message.id"
    >
      <message-card 
        :message="message" 
        :showingMessage="showingMessage"
      />
    </div>
  </div>
</template>

<script>
import MessageCard from '@/components/MessageCard.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      count: 1
    }
  },
  computed: {
    ...mapState(['message', 'realtor']),
    ...mapGetters(['sortedMessages']),
    showingMessage() {
      return this.message.showingMessage
    },
  },
  mounted() {
    this.scroll()
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.count++
          let payload = {
            realtorId: this.realtor.realtor.id,
            page: this.count
          }
          this.$store.dispatch('fetchNextPage', payload)
        }
      };
    },
  },
  components: {
    MessageCard
  }  
}
</script>

<style lang="scss" scoped>
.show-list {
  display: block;
}
@media screen and (max-width: 1100px) {
  .hide-list {
    display: none;
  }
}
</style>