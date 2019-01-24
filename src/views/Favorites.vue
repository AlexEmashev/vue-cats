<template>
  <div class="favorites">
    <div class="favorites-list" v-if="favorites.length > 0">
      <ul>
        <li
          v-for="(favorite, index) in favorites"
          :key="index"
        >
          <!-- <router-link :to="{name: 'home', params: { imageId: favorite }}"> -->
            <image-card class="image-card" 
              :imageSrc="favorite"
              :isInFavorite="true"
              :shareUrl="shareUrl + '?imageId=' + favorite"
              :shareTitle="shareTitle"
              :shareDescription="shareDescription"
              @favorite="removeFromFavorite"
            >
            </image-card>
          <!-- </router-link> -->
          <!-- <button
            class="btn"
            @click="removeFromFavorite(favorite)">Remove</button> -->
        </li>
      </ul>

    </div>
    <div v-else>
      Here will be your favorite cats when you pick some.
    </div>
  </div>
</template>

<script>
import store from "@/store/store";
import ImageCard from "@/components/ImageCard.vue";

export default {
  store,
  components: {
    "image-card": ImageCard
  },
  computed: {
    favorites() {
      return store.state.favorites;
    },
    shareTitle() {
      return process.env.VUE_APP_Title
    },
    shareDescription() {
      return process.env.VUE_APP_Description
    },
    shareUrl() {
      return process.env.VUE_APP_URL
    }
  },
  methods: {
    removeFromFavorite(url) {
      store.commit("favorite", url);
    }
  }
};
</script>

