import config from '~/config'
const components = config.components
export default {
  getTemplate (defaultComponent, item) {
    let component = defaultComponent
    if (item) {
      if (item.id && components.indexOf(item.id) !== -1) {
        component = item.id
      }

      if (item.slug && components.indexOf(item.slug) !== -1) {
        component = item.slug
      }

      if (item.template && components.indexOf(item.template)) {
        component = item.template
      }
    }
    return component
  }
}
