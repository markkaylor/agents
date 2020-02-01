<template>
  <div class="message-card">
    <!-- Type Icon-->
    <div class="message-icon">{{ message.type }}</div>
    <div class="message-container">
      <div class="message-header">
        <!-- Name -->
        <h3 class="message-contact bold">{{ fullName }}</h3>
        <!-- Time -->
        <span class="message-time">Time</span>
      </div>
      <div class="message-content">
        <!-- Type Description -->      
        <div class="message-type light-bold">{{ message.type }}</div>

        <!-- Body -->
        <div class="message-body">{{ message.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: Object,
      }
    },
    computed: {
      fullName() {
        return this.message.contact.firstname + ' ' + this.message.contact.lastname
      }
    }
  }
</script>

<style lang="scss" scoped>
.message-card {
  display: flex;
  border-bottom: 1px solid grey;
}

.message-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.message-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.message-header {
  display: flex;
  justify-content: space-between;

  h3 {
    margin: 0;
  }
}
</style>