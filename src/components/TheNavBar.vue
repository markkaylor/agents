<template>
  <div id="nav">
    <div class="nav-container">
      <div class="logo-counter">
        <div class="brand-logo">
          MeilleursAgents
        </div>
        <div 
          class="message-counter"
          :class="unreadMessageCount === 0 ? 'bg-muted' : 'bg-green'"
        >
          <div class="icon">
            <i class="mypro-icon mypro-icon-mail" />
          </div>
            <div>{{ unreadMessageCount }}</div>
        </div>
      </div>
      <a 
        class="realtor-dropdown"
        @click="toggleShow"
      >
        <img 
          v-if="realtor.realtor"
          :src="realtor.realtor.logo" 
        />
        <div v-else>Realtors</div>
        <i class="mypro-icon mypro-icon-arrow-down" />
      </a>
    </div>
    <RealtorDropdown 
      :realtors="realtor.realtors"
      :show="show" 
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import RealtorDropdown from '@/components/RealtorDropdown.vue'

export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$store.dispatch('fetchRealtors')
  },
  computed:{
    ...mapState(['realtor']),
    /**
     * Counts the number of messages with the property read = true
     */
    ...mapGetters(['unreadMessageCount']),
    /**
     * These are the unread messages on the realtor endpoint, but the number doesn't make sense to me
     */
    unreadMessages() {
      return this.realtor.realtor ? this.realtor.realtor.unread_messages : 0;
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    }
  },
  components: {
    RealtorDropdown,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables.scss';
@import '../assets/mypro-icon.css';

#nav {
  width: 100%;
  height: $nav-height;
  background-color: $blue;
  position: fixed;
  color: white;
}

.nav-container {
  height: 100%;
  display: flex;
}

.logo-counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
}

.message-counter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  width: 80px;
  height: 40px;
}

.realtor-dropdown {
  border-left: 1px solid white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  background-color: $dark-blue;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  i {
    padding-left: 10px;
  }
}
</style>