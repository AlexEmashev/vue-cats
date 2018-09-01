<template>
  <section class="home">
    <h1>This is a home page</h1>
    <div class="categories">
      <category-button
        v-for="category in categories"
        :key="category.id"
        :label="category.name"
        :value="category.selected"
        @input="categorySwitch(category.id)"
        ></category-button>
    </div>
    <div v-if="inProgress">Loading...</div>
    <image-box :src="imageSrc"></image-box>
    <button class="moar-button" @click="getImage">Moar!</button>
    <share-button>Share</share-button>
  </section>
</template>

<script>
import ImageBox from '@/components/ImageBox.vue'
import ShareButton from '@/components/ShareButton.vue'
import CategoryButton from '@/components/CategoryButton.vue'
import store from '@/store/store'

export default {
  name: 'home',
  store,
  data() {
    return {
    }
  },
  components: {
    'image-box': ImageBox,
    'share-button': ShareButton,
    'category-button': CategoryButton
  },
  computed: {
    inProgress() {
      return store.state.inProgress
    },
    imageSrc() {
      return store.state.imageURL
    },
    categories() {
      return store.state.categories
    }
  },
  methods: {
    getImage() {
      this.$store.dispatch('getImage')
    },
    categorySwitch(id) {
      this.$store.commit('toggleCategory', id)
    }
  },
  created() {
    this.$store.dispatch('getCategories')
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: block;
  }
</style>