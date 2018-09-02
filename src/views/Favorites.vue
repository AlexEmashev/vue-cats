<template>
  <div class="favorites">
    <h1>Favorite cats</h1>
    <div class="favorites-list" v-if="favorites.length > 0">
      <ul>
        <li
          v-for="(favorite, index) in favorites"
          :key="index"
        >
          <router-link :to="{name: 'home', params: { imageId: favorite }}">
            <img :src="favorite" alt="">
          </router-link>
          <button @click="removeFromFavorite(favorite)">Remove</button>
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

export default {
  store,
  computed: {
    favorites() {
      return store.state.favorites;
    }
  },
  methods: {
    removeFromFavorite(imageUrl) {
      store.commit("favorite", imageUrl);
    }
  }
};
</script>

