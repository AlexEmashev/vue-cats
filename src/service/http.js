import axios from 'axios'

/**
 * Returns HTTP service to work with remote
 */
class httpService {
  constructor() {
    console.log('✨ Http service created!')
    this.http = axios.create({
      baseURL: `https://api.thecatapi.com/v1/images/`,
      headers: {

      }
    })
  }

  /**
   * Returns image in json format
   */
  getRandomImage() {
    return this.http.get(
      'search', {
        params: {
          'format': 'json'
        }
      }
    )
  }
}

/**
 * Service
 */
export const HttpService = new httpService()
