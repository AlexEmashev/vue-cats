import Vue from 'vue'
import Vuex from 'vuex'
import { HttpService } from '@/service/http'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    /**
     * List of categories
     */
    categories: [],
    imageTypes: [
      {
        id: 0,
        name: 'Image',
        value: 'jpg,png',
        selected: true
      },
      {
        id: 1,
        name: 'Gifs',
        value: 'gif',
        selected: true
      }
    ],
    /**
     * List of favorites
     */
    favorites: [],
    /**
     * Current image
     */
    imageURL: '',
    /**
     * Error description, occured during actions
     */
    error: '',
    /**
     * Depicts if fetching is in progress
     */
    inProgress: false
  },
  mutations: {
    /**
     * Adds item to favorite
     * @param {*} state
     * @param {*} favorite object
     */
    addFavorite(state, favorite) {

    },
    /**
     * Setts available categories
     * @param {*} state
     * @param {*} categories
     */
    setCategories(state, categories) {
      state.categories = categories
    },
    /**
     * Toggles category
     * @param {*} state
     * @param {*} category category to toggle.
     */
    toggleCategory(state, id) {
      state.categories.map(category => {
        if (category.id === id) {
          category.selected = !category.selected
        }
        return category
      })
    },
    /**
     * Toggles image types
     * @param {*} state
     * @param {*} category image type to toggle.
     */
    toggleImageType(state, id) {
      state.imageTypes.map(imageType => {
        if (imageType.id === id) {
          imageType.selected = !imageType.selected
        }
        return imageType
      })
    },
    imageLoading(state) {
      state.inProgress = true
    },
    imageLoaded(state, imageURL) {
      state.imageURL = imageURL
      state.inProgress = false
    }
  },
  actions: { // They are like effects.
    /**
     * Returns image object from remote resource
     * @param {*} context
     * @param {Array} categoryIds
     */
    getImage(context, categoryIds) {
      context.commit('imageLoading')
      let imageTypes = ''

      for (let i = 0; i < context.state.imageTypes.length; i++) {
        if (context.state.imageTypes[i].selected) {
          imageTypes += context.state.imageTypes[i].value + ','
        }
      }

      HttpService.getImage({'mime_types': imageTypes})

      .then((response) => {
        context.commit('imageLoaded', response.data[0].url)
      })
      .catch((error) => {
        console.error('👎 Error while loading image: ', error)
        context.commit('imageLoaded', '')
      })
    },
    /**
     * Returns categories list from remote
     */
    getCategories(context) {
      HttpService.getCategories()
      .then((response) => {
        const categories = response.data.map(
          category =>  Object.assign(category, {'selected': true}))
        context.commit('setCategories', categories)
      })
      .catch((error) => {
        console.error('👎 Error while loading categories: ', error)
      })
    }
  }
})
