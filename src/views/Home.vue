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
    <button @click="Favorite()" :disabled="!imageSrc">Favorite</button> {{isInFavorite}}
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
    },
    isInFavorite() {
      return store.getters.isInFavorite;
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
    },
    Favorite() {
      this.$store.commit('favorite', store.state.imageURL)
    }
  },
  created() {
    // Load image if present
    if (this.$route.params.imageId) {
      this.$store.commit("setImageURL", this.$route.params.imageId);
    } else if (this.$store.state.imageURL === '') { // If there were no image previously on store
      this.$store.dispatch("getImage");
    }
    if (store.state.categories.length === 0) { // Load categories once
      this.$store.dispatch("getCategories");
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  display: block;
}
</style>