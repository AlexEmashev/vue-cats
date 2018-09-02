import axios from 'axios'

/**
 * Returns HTTP service to work with remote
 */
class httpService {
  constructor() {
    this.http = axios.create({
      baseURL: `https://api.thecatapi.com/v1/`,
      headers: {

      }
    })
  }

  /**
   * Returns image in json format
   */
  getImage(params) {
    let _params = {'format': 'json'}

    if (params) {
      _params = {..._params, ...params}
    }

    return this.http.get(
      'images/search',
      { params: _params }
    )
  }

  /**
   * Returns categories list
   */
  getCategories() {
    return this.http.get(
      'categories',
      {'format': 'json'}
    )
  }
}

/**
 * Service
 */
export const HttpService = new httpService()
