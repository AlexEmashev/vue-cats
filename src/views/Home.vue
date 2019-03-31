<template>
  <section class="home">
    <div class="filters-panel">
      <div @click="filtersExpanded = !filtersExpanded" class="panel-header">
        <div class="panel-header-wrapper">
          <span class="panel-title">
            Filters
          </span>
          <span v-if="!filtersExpanded" class="panel-open">
            <svg
              class="panel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </span>
          <span v-else class="panel-close">
            <svg
              class="panel-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </div>
      </div>
      <div class="panel-content" v-bind:class="{'panel-collapsed':!filtersExpanded}">
        <div class="categories">
          <span class="categories-label">Categories:</span>
          <switch-button
            v-for="category in categories"
            :key="category.id"
            :label="category.name"
            :value="category.selected"
            @input="switchCategory(category.id)"
          ></switch-button>
        </div>

        <div class="types">
          <span class="types-label">Types:</span>
          <switch-button
            v-for="imageType in imageTypes"
            :key="imageType.id"
            :label="imageType.name"
            :value="imageType.selected"
            @input="switchType(imageType.id)"
          ></switch-button>
        </div>
      </div>
    </div>

    <image-card
      :isLoading="inProgress"
      :isError="isError"
      :isInFavorite="isInFavorite"
      :imageSrc="imageSrc"
      :shareUrl="shareUrl"
      :shareTitle="shareTitle"
      :shareDescription="shareDescription"
      @favorite="favorite"
    ></image-card>
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
import ImageCard from "@/components/ImageCard.vue";
import SwitchButton from "@/components/SwitchButton.vue";
import store from "@/store/store";
// import appConstants from "@/service/appConstants";

export default {
  name: "home",
  store,
  data() {
    return {
      filtersExpanded: false
    };
  },
  components: {
    "image-card": ImageCard,
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
    },
    isError() {
      return store.state.error;
    },
    shareTitle() {
      return process.env.VUE_APP_Title;
    },
    shareDescription() {
      return process.env.VUE_APP_Description;
    },
    shareUrl() {
      return process.env.VUE_APP_URL + "?imageId=" + store.state.imageURL;
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
    favorite(url) {
      store.commit("favorite", url);
    }
  },
  created() {
    // Load image if present
    if (this.$route.query.imageId) {
      store.commit("setImageURL", this.$route.query.imageId);
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
@import "../../styles/style.scss";

.home {
  display: block;
}

.filters-panel {
  margin-bottom: 9px;
  text-align: left;
  @media (min-width: $break-sm) {
    margin-bottom: 30px;
    text-align: center;
  }
}

.categories {
  &-label {
    color: $font-color-darker;
    font-weight: 600;
    margin-right: 0.5em;
  }
  margin-bottom: 7px;
}

.types {
  &-label {
    color: $font-color-darker;
    font-weight: 600;
    margin-right: 0.5em;
  }
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

.panel-header {
  // background-color: darken($bg-color, 10%);
  display: block;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 9px;
  user-select: none;
  cursor: pointer;
  color: $fg-color;
  font-weight: 600;
  border-radius: $control-border-radius $control-border-radius 0 0;
  @media (min-width: $break-sm) {
    display: none;
  }

  &-wrapper {
    display: flex;
    align-items: center;
  }
}

.panel-title {
  padding-right: 5px;
  font-size: 13px;
}

.panel-content {
  // background-color: darken($bg-color, 6%);
  padding: 0 0 1rem;
  // border-radius: 0 0 $control-border-radius $control-border-radius;
  @media (min-width: $break-sm) {
    background: transparent;
    padding: 0;
  }
  &.panel-collapsed {
    height: 0;
    overflow: hidden;
    padding: 0;
    @media (min-width: $break-sm) {
      padding: inherit;
      height: inherit;
    }
  }
}

.panel-icon {
  display: flex;
  align-content: center;
  width: 19px;
  height: 19px;
}
.panel-spacer {
  flex: 1 1 auto;
}

.categories-label,
.types-label {
  font-size: 13px;
}
</style>