<template>
  <button :disabled="disabled" class="btn btn-icon">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ["disabled"],
  computed: {
  },
  methods: {
  },
  created() {
  }
};
</script>

<style scoped lang="scss">
</style>