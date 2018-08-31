<template>
  <label>
    {{label}}
    <input type="checkbox">
  </label>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: [
    'label',
    'value'
  ],
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