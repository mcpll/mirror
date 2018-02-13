import api from '@/assets/js/wpApi'

export const state = () => ({
  itemsBySlug: {},
  pages: [],
  posts: []
})

export const getters = {
  getItemBySlug(state) {
    return slug => state.itemsBySlug[slug]
  },
  findPages(state) {
    let toRet = []
    state.pages.forEach(pageSlug => {
      toRet.push(state.itemsBySlug[pageSlug])
    })
    return toRet
  }
}

export const actions = {
  async getPostBySlug(context, slug) {
    const item = await api.posts.getBySlug(slug);
    context.commit('addPost', item)
  },
  async getPageBySlug(context, slug) {
    const item = await api.pages.getBySlug(slug);
    context.commit('addPage', item)
  },
  async findPages(context) {
    const items = await api.pages.find();
    items.forEach(item => {
      context.commit('addPage', item)
    })
  }
}

export const mutations = {
  addPage(state, item) {
    if (item && item.slug) {
      state.itemsBySlug[item.slug] = item
      if (state.pages.indexOf(item.slug) === -1) {
        state.pages.push(item.slug)
      }
    }
  },
  addPost(state, item) {
    if (item && item.slug) {
      state.itemsBySlug[item.slug] = item
      if (state.posts.indexOf(item.slug) === -1) {
        state.posts.push(item.slug)
      }
    }
  }
}
