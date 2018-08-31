import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    image: null,
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

    }
  },
  actions: {
    /**
     * Returns image object from remote resource
     * @param {*} context 
     * @param {*} categoryId 
     */
    getImage(context, categoryId) {

    },
    /**
     * Returns categories list from remote
     */
    getCategories() {

    }
  }
})
