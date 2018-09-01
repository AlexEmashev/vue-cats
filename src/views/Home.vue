<template>
  <section class="home">
    <h1>This is a home page</h1>
    <div class="categories">
      Categories:
      <switch-button
        v-for="category in categories"
        :key="category.id"
        :label="category.name"
        :value="category.selected"
        @input="switchCategory(category.id)"
        ></switch-button>
    </div>

    <div class="types">
    Types:
      <switch-button v-for="imageType in imageTypes"
        :key="imageType.id"
        :label="imageType.name"
        :value="imageType.selected"
        @input="switchType(imageType.id)"
      ></switch-button>
    </div>

    <div v-if="inProgress">Loading...</div>
    <image-box :src="imageSrc"></image-box>
    <button class="moar-button" @click="getImage">Moar!</button>
    <share-button>Share</share-button>
  </section>
</template>

<script>
import ImageBox from "@/components/ImageBox.vue";
import ShareButton from "@/components/ShareButton.vue";
import SwitchButton from "@/components/SwitchButton.vue";
import store from "@/store/store";

export default {
  name: "home",
  store,
  data() {
    return {};
  },
  components: {
    "image-box": ImageBox,
    "share-button": ShareButton,
    "switch-button": SwitchButton
  },
  computed: {
    inProgress() {
      return store.state.inProgress;
    },
    imageSrc() {
      return store.state.imageURL;
    },
    categories() {
      return store.state.categories;
    },
    imageTypes() {
      return store.state.imageTypes;
    }
  },
  methods: {
    getImage() {
      this.$store.dispatch("getImage");
    },
    switchCategory(id) {
      this.$store.commit("toggleCategory", id);
    },
    switchType(id) {
      this.$store.commit("toggleImageType", id);
    }
  },
  created() {
    this.$store.dispatch("getCategories");
  }
};
</script>

<style scoped lang="scss">
.home {
  display: block;
}
</style>