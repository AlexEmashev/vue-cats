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

    },
    /**
     * Toggles category
     * @param {*} state
     * @param {*} category category to toggle.
     */
    toggleCategory(state, category) {

    },
    imageLoading(state) {
      state.inProgress = true
    },
    imageLoaded(state, imageURL) {
      console.log('Image loaded:', imageURL)
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

      HttpService.getRandomImage()
      .then((response) => {
        context.commit('imageLoaded', response.data[0].url)
      })
      .catch((error) => {
        context.commit('imageLoaded', '')
      })
    },
    /**
     * Returns categories list from remote
     */
    getCategories() {

    }
  }
})
