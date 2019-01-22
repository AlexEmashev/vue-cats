<template>
  <figure class="image-container">
    <div v-if="isError" class="no-image">
      <div class="no-image-logo">
        <span>Sorry</span>
        <span>no image available</span>
      </div>
    </div>
    <div v-if="isLoading" class="image-loading">
      <div class="image-loading-sign">Loading...</div>
    </div>
    <div v-else class="image" :style="{backgroundImage: 'url(' + src + ')'}"></div>
  </figure>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["src", "isLoading", "isError"],
  computed: {},
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
@import "../../styles/style.scss";
.image-container {
  // Hack to make image container maintain proportions
  display: block;
  margin: 0 auto;
  width: 100%;
  position: relative;
  max-width: $container-max-width;
  background-color: #00000036;
  border-radius: 6px;

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
.image, .image-loading, .no-image {
  // Hack to make image fit to parent container
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  height: 100%;
  width: 100%;
}

.image-loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &-sign {
    font-size: 24px;
    font-weight: 500;
    color: $font-color;
  }
}

.no-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-logo {
  display: flex;
  margin: 0 auto;
  width: 250px;
  height: 250px;
  border: 5px solid $font-color-darker;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    color: $font-color-darker;
    font-weight: 700;
    font-size: 20px;
  }
}
}

</style>