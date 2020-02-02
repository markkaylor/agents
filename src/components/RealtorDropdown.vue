<template>
  <div 
    class="dropdown"
    :class="show ? 'show-dropdown' : 'hide-dropdown'"
  >
    <div class="dropdown-content">
      <a 
        v-for="realtor in realtors" 
        :key="realtor.id"
        @click="fetchMessages(realtor.id)"
      >
          {{ realtor.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    realtors: {
      type: Array,
      required: true,
    }
  },
  methods: {
    fetchMessages(realtorId) {
      this.$store.dispatch('fetchMessages', realtorId)
      this.$store.dispatch('fetchRealtor', realtorId)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables.scss';

.dropdown {
  height: 100px;
  width: 200px;
  position: relative;
  background-color: $light-muted;
  float: right;
  margin: 0.5rem;
  border-radius: 4px;
}

.dropdown-content {
  color: black;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.show-dropdown {
  display: block;
}

.hide-dropdown {
  display: none;
}
</style>