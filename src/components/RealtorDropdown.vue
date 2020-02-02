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
  position: relative;
  width: 50%;
  float: right;
  margin: 0.5rem;
}

.dropdown-content {
  color: black;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: $light-muted;
  width: 100%;

  a {
    border-bottom: 1px solid $muted;
    padding: 1rem;
  }
}

.show-dropdown {
  display: block;
}

.hide-dropdown {
  display: none;
}
</style>