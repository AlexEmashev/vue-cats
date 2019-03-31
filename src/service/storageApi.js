export class StorageApi {
  static favoritesPath = "favorites";

  static _setItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static _getItem(key) {
    const result = window.localStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    } else {
      return undefined;
    }
  }

  /**
   * Saves favorite image to the storage.
   * @param {string} item image URL.
   */
  static saveFavorite(item) {
    const favorites = this._getItem(this.favoritesPath);

    if (Array.isArray(favorites)) {
      this._setItem(this.favoritesPath, [...favorites, item]);
    } else {
      this._setItem(this.favoritesPath, [item])
    }
  }

  /**
   * Removes image from the favorites.
   * @param {string} item image URL
   */
  static removeFavorite(item) {
    const favorites = this._getItem(this.favoritesPath);
    if (Array.isArray(favorites)) {
      const newFavorites = favorites.filter(v => v !== item);
      this._setItem(this.favoritesPath, newFavorites);
    }
  }

  /**
   * Returns favorites list
   * @returns string[] or undefined.
   */
  static getFavorites() {
    return this._getItem(this.favoritesPath);
  }
}
