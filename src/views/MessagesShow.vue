<template>
  <div>
    <h1 v-if="!realtor.realtor">Please Select A Realtor</h1>
    <div class="show-container">
      <message-list class="message-list" />
      <message-details class="message-details" />
    </div>
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
@media screen and (min-width: 1100px) {
  .show-container {
    display: grid;
    grid-template-columns: 40% 60%
  }
}

h1 {
  text-align: center;
}
</style>
