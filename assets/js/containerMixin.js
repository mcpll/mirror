export default {
  methods: {
    renderContent (item) {
      if (item && item.content) {
        return item.content.rendered
      }
    }
  }
}
