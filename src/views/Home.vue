<template>
  <section class="home">
    <h1>This is a home page</h1>
    <div class="categories">
      <category-button v-for="category in categories" :key="category.id" :label="category.name"></category-button>
    </div>
    <image-box :src="imgSrc"></image-box>
    <button class="moar-button">Moar!</button>
    <share-button>Share</share-button>
  </section>
</template>

<script>
import ImageBox from '@/components/ImageBox.vue'
import ShareButton from '@/components/ShareButton.vue'
import CategoryButton from '@/components/CategoryButton.vue'

export default {
  name: 'home',
  data() {
    return {
      imgSrc: ``,
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
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: block;
  }
</style>