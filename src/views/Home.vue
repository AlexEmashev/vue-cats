<template>
  <section class="home">
    <h1>This is a home page</h1>
    <div v-if="inProgress">Loading...</div>
    <div class="categories">
      <category-button v-for="category in categories" :key="category.id" :label="category.name"></category-button>
    </div>
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
      httpService: null,
      categories: [
        {
          id: 1,
          name: 'category1',
          selected: true
        },
        {
          id: 2,
          name: 'category2',
          selected: false
        }
      ]
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
    }
  },
  methods: {
    getImage() {
      this.$store.dispatch('getImage')
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: block;
  }
</style>