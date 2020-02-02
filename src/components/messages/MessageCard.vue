<template>
  <div 
    class="card-container"
  >
    <a 
      class="link" 
      @click="toggleShow"
    >
      <div class="message-card">
        <!-- Type Icon-->
        <div class="icon">
          <i 
            :class="[
              'mypro-icon mypro-icon-'+iconType,
              message.read ? 'highlight-blue' : 'dark-muted'
            ]" 
          />
        </div>
        <div class="message-container"
          :class="message.read ? '' : 'muted'"
        >
          <div class="message-header">
            <!-- Name -->
            <div 
              class="message-contact"
            >
              <h3>{{ fullName }} </h3>
              <span 
                v-if="isPhoneMessage"
                class="message-phone"
              >
                ({{ message.contact.phone }})
              </span>
            </div>
            <!-- Time -->
            <span class="message-time highlight-blue">
              {{ formatDate }}
            </span>
          </div>
          <div class="message-content">
            <!-- Type Description -->      
            <div class="message-type light-bold">
              {{ messageType }}
            </div>
            <!-- Body -->
            <div class="message-body">
              {{ message.body }}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
    showingMessage: {
      type: Boolean
    }
  },
  computed: {
    fullName() {
      return this.message.contact.firstname + ' ' + this.message.contact.lastname
    },
    isPhoneMessage() {
      return this.message.type === 'phone' || this.message.type === 'sms'
    },
    formatDate() {
      return this.$moment(this.message.date).format('hh:mm')
    },
    iconType() {
      return this.message.type === 'email' ? 'mail' : this.message.type
    },
    messageType() {
      let message
      if (this.message.type === 'phone') {
        message = 'Phone call from MeilleursAgents'
      }

      if (this.message.type === 'sms') {
        message = 'Text Message in your MeilleursAgents inbox'
      }

      if (this.message.type === 'email') {
        message = 'Email in your MeilleursAgents inbox'
      }

      return message
    },
  },
  methods: {
    toggleShow() {
      this.$store.dispatch('showingMessage')
      this.$store.dispatch('fetchMessage', this.message.id)
      this.$store.dispatch('toggleMessageRead')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/mypro-icon.css';
@import '../../assets/stylesheets/variables.scss';

.message-card {
  display: flex;
  border-bottom: 1.25px solid $muted;
  padding: 1.25rem 0.5rem;
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
  font-size: 14px;

  .message-body {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px
  }
}

.message-header {
  display: flex;
  justify-content: space-between;

  h3 {
    margin: 0;
    display: inline;
  }

  span {
    font-size: 14px;
  }
}
</style>