<template>
  <div class="favorites">
    <h1>Favorite cats</h1>
    <div class="favorites-list" v-if="favorites.length > 0">
      <router-link
      v-for="(favorite, index) in favorites"
      :key="index"
      :to="{name: 'home', params: { imageId: favorite }}">
        <img :src="favorite" alt="">
      </router-link>
    </div>
    <div v-else>
      Here will be your favorite cats when you pick some.
    </div>
  </div>
</template>

<script>
import store from "@/store/store";

export default {
  computed: {
    favorites() {
      return store.state.favorites;
    }
  }
};
</script>

