<template>
  <figure class="image-container">
    <div v-if="!src" class="no-image">
      <span>Sorry</span>
      <span>no image available</span>
    </div>
    <div class="image" :style="{backgroundImage: 'url(' + src + ')'}"></div>
    <!-- <img v-else class="image" :src="src" alt="Main image"> -->
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
  // Hack to make image container maintain proportions
  display: block;
  margin: 25px auto;
  width: 100%;
  position: relative;
  //height: 100%;
  max-width: 425px;
  //max-height: 425px;
  &:before {
    content: "";
    float: left;
    padding-bottom: 80%;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.image {
  // Hack to make image fit to parent container
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  height: 100%;
  width: 100%;
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