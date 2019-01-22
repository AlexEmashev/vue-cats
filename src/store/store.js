import Vue from "vue";
import Vuex from "vuex";
import { HttpService } from "@/service/http";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    /**
     * List of categories
     */
    categories: [],
    imageTypes: [
      {
        id: 0,
        name: "Gifs",
        value: "gif",
        selected: true
      },
      {
        id: 1,
        name: "Image",
        value: "jpg,png",
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
    imageURL: "",
    /**
     * Error description, occured during actions
     */
    error: "",
    /**
     * Depicts if fetching is in progress
     */
    inProgress: false
  },
  getters: {
    /**
     * Returns true if this image is liked
     */
    isInFavorite: state => {
      for (let i = 0; i < state.favorites.length; i++) {
        if (state.imageURL === state.favorites[i]){
          return true
        }
      }

      return false
    }
  },
  mutations: {
    /**
     * Adds or removes an item from favorite
     * @param {*} state
     * @param {*} imageUrl link to image
     */
    favorite(state, imageUrl) {
      let indexOfFavorite = state.favorites.indexOf(imageUrl)

      if (indexOfFavorite >= 0) {
        state.favorites.splice(indexOfFavorite, 1)
      } else {
        state.favorites.push(imageUrl)
      }
    },
    /**
     * Setts available categories
     * @param {*} state
     * @param {*} categories
     */
    setCategories(state, categories) {
      state.categories = categories;
    },
    /**
     * Toggles category
     * @param {*} state
     * @param {*} category category to toggle.
     */
    toggleCategory(state, id) {
      state.categories.map(category => {
        if (category.id === id) {
          category.selected = !category.selected;
        }
        return category;
      });
    },
    /**
     * Toggles image types
     * @param {*} state
     * @param {*} category image type to toggle.
     */
    toggleImageType(state, id) {
      state.imageTypes.map(imageType => {
        if (imageType.id === id) {
          imageType.selected = !imageType.selected;
        }
        return imageType;
      });
    },
    imageLoading(state) {
      state.inProgress = true;
    },
    imageLoaded(state, imageURL) {
      state.imageURL = imageURL;
      state.inProgress = false;
      if (!imageURL) {
        state.error = true;
      } else {
        state.error = false;
      }
    },
    setImageURL(state, url) {
      state.imageURL = url
    }
  },
  actions: {
    // They are like effects.
    /**
     * Returns image object from remote resource
     * @param {*} context
     */
    getImage(context) {
      context.commit("imageLoading");
      let imageTypes = "";

      for (let i = 0; i < context.state.imageTypes.length; i++) {
        if (context.state.imageTypes[i].selected) {
          imageTypes += context.state.imageTypes[i].value + ",";
        }
      }

      HttpService.getImage({ mime_types: imageTypes })

        .then(response => {
          context.commit("imageLoaded", response.data[0].url);
        })
        .catch(error => {
          console.error("👎 Error while loading image: ", error);
          context.commit("imageLoaded", "");
        });
    },
    /**
     * Returns categories list from remote
     */
    getCategories(context) {
      HttpService.getCategories()
        .then(response => {
          const categories = response.data.map(category =>
            Object.assign(category, { selected: true })
          );
          context.commit("setCategories", categories);
        })
        .catch(error => {
          console.error("👎 Error while loading categories: ", error);
        });
    }
  }
});
