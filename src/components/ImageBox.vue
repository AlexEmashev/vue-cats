<template>
  <figure class="image-container">
    <div v-if="!src" class="no-image">
      <span>Sorry</span>
      <span>no image available</span>
    </div>
    <img v-else class="image" :src="src" alt="Main image">
  </figure>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["src"],
  computed: {},
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.image-container {
  display: block;
  margin: 0;
  width: 100%;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}
.no-image {
  display: flex;
  margin: 0 auto;
  width: 175px;
  height: 175px;
  border: 5px solid #80808073;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    color: #80808073;
    font-weight: 700;
  }
}
</style>