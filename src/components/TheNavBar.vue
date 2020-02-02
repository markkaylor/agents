<template>
  <div id="nav">
    <div class="nav-container">
      <div class="logo-counter">
        <div class="brand-logo">
          MeilleursAgents
        </div>
        <div class="message-counter">
          <div class="icon">
            <i class="mypro-icon mypro-icon-mail" />
          </div>
          {{ getUnreadMessageCount }}
        </div>
      </div>
      <a 
        class="realtor-dropdown"
        @click="toggleShow"
      >
        avatar
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
import { mapGetters, mapState } from 'vuex'
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
  mounted() {
    console.log(this.realtor)
  },
  computed:{
    ...mapState(['realtor']),
    ...mapGetters(['getUnreadMessageCount'])
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
  background-color: $light-green;
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
}
</style>