<template>
  <section class="home">
    <h1>This is a home page</h1>
    <div class="categories">Categories:
      <switch-button
        v-for="category in categories"
        :key="category.id"
        :label="category.name"
        :value="category.selected"
        @input="switchCategory(category.id)"
      ></switch-button>
    </div>

    <div class="types">Types:
      <switch-button
        v-for="imageType in imageTypes"
        :key="imageType.id"
        :label="imageType.name"
        :value="imageType.selected"
        @input="switchType(imageType.id)"
      ></switch-button>
    </div>

    <div v-if="inProgress">Loading...</div>
    <image-box class="image-box" v-else :src="imageSrc"></image-box>

    <figure v-if="!inProgress" class="buttons-secondary">
      <button class="btn btn-icon" @click="Favorite()" :disabled="!imageSrc">
        <svg
          class="btn-image"
          v-if="isInFavorite"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          ></path>
        </svg>
        <svg
          class="btn-image"
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            class="heart"
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          ></path>
        </svg>
      </button>

      <share-button>
        <svg
          class="btn-image"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
          ></path>
        </svg>
      </share-button>
    </figure>

    <button class="btn btn-primary moar-button" @click="getImage">
      <svg
        class="btn-image moar-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle cx="4.5" cy="9.5" r="2.5"></circle>
        <circle cx="9" cy="5.5" r="2.5"></circle>
        <circle cx="15" cy="5.5" r="2.5"></circle>
        <circle cx="19.5" cy="9.5" r="2.5"></circle>
        <path
          d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"
        ></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
      <span class="moar-text">Moar!</span>
    </button>

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
      store.dispatch("getImage");
    },
    switchCategory(id) {
      store.commit("toggleCategory", id);
    },
    switchType(id) {
      store.commit("toggleImageType", id);
    },
    Favorite() {
      store.commit("favorite", store.state.imageURL);
    }
  },
  created() {
    // Load image if present
    if (this.$route.params.imageId) {
      store.commit("setImageURL", this.$route.params.imageId);
    } else if (store.state.imageURL === "") {
      // If there were no image previously on store
      store.dispatch("getImage");
    }
    if (store.state.categories.length === 0) {
      // Load categories once
      store.dispatch("getCategories");
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  display: block;
}

.image-box {
  margin-top: 27px;
}

.buttons-secondary {
  max-width: 425px;
  margin: 7px auto;
  text-align: right;
}

.moar-button {
  margin: 0 auto;
  font-weight: normal;
  .moar-icon {
    margin-right: 14px;
  }

  .moar-text {
    font-weight: normal;
    font-size: 28px;
  }
}
</style>