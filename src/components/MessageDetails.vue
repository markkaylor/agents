<template>
  <div
    class="details-container"
    :class="showing ? 'show-message' : 'hide-message'"
  >
    <a @click="showing = !showing">Back To Messages</a>
    <div class="header-card">
      <div class="icon">
        <i 
          :class="[
            'mypro-icon mypro-icon-'+iconType,
            message.read ? 'highlight-blue' : 'dark-muted'
          ]" 
        />
      </div>
      <div class="details-header">
        <div class="title">
          <h3>{{ fullName }} </h3>
        </div>
        <div class="contact-container">
          <div class="contact-info">
            <span>Email:</span>
            <span>{{message.contact.email}}</span>
          </div>
          <div class="contact-info">
            <span>Phone:</span>
            <span>{{message.contact.phone}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="details-body">
      <div class="title">
        <h3>{{ fullName }}</h3>
        <div class="date">{{ message.date }}</div>
      </div>
      {{ message.body }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: Object,
      },
      showing: {
        type: Boolean,
      }
    },
    computed: {
      fullName() {
        return this.message.contact.firstname + ' ' + this.message.contact.lastname
      },
      iconType() {
        return this.message.type === 'email' ? 'mail' : this.message.type
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables.scss';

.details-container {
  padding-top: 1rem;
  width: 100%;

  a {
    color: $highlight-blue;
    margin: 0 1rem;
  }
  
  h3 {
    margin: 0;
  }
}

.details-body,
.header-card {
  background-color: white;
  border-radius: 2px;
  padding: 1rem;
}

.header-card {
  display: flex;  
}

.details-header {
  width: 100%;
}

.contact-info {
  display: flex;
  justify-content: space-between;
}

.contact-container {
  width: 80%;
}

.header-card {
  margin: 1rem;
}

.title {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.details-body {
  margin: 1rem;
  text-align: left;
}

.show-message {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $light-muted;
  z-index: 2;
}

.hide-message {
  display: none;
}
</style>