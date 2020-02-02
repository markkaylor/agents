<template>
  <div 
    class="dropdown"
    :class="show ? 'show-dropdown' : 'hide-dropdown'"
  >
    <div class="dropdown-content">
      <div v-for="realtor in realtors" :key="realtor.id">
          {{ realtor.name }}
      </div>
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
}

.show-dropdown {
  display: block;
}

.hide-dropdown {
  display: none;
}
</style>