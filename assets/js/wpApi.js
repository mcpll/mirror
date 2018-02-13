import axios from 'axios'
import config from '@/config'
axios.defaults.baseURL = config.baseUrl;

const responseHandler = response => response.data

export default {
  posts: {
    async getBySlug (slug) {
      let toRet = null
      const items = responseHandler(await axios.get(`posts?slug=${slug}`))
      if (items && items.length === 1) {
        toRet = items[0]
      }
      return toRet
    }
  },
  pages: {
    async getBySlug (slug) {
      let toRet = null
      const items = responseHandler(await axios.get(`pages?slug=${slug}`))
      if (items && items.length === 1) {
        toRet = items[0]
      }
      return toRet
    },
    async find () {
      return responseHandler(await axios.get(`pages`))
    }
  }
}
