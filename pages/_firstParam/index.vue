<template>
  <component :is="component" :page="page"></component>
</template>

<script>
  import paramsParser from '~/assets/js/paramsParser'
  import templateParser from '~/assets/js/templateParser'
  import config from '~/config'

  export default {
    computed: {
      template () {
        return this.page.template
      },
      component () {
        const defaultComponent = this.isPage ? 'page' : 'archive'
        const template = templateParser.getTemplate(defaultComponent, this.page)
        return () => import(`~/containers/${template}.vue`)
      },
      firstParam () {
        return this.$route.params.firstParam
      },
      isPage () {
        return paramsParser.isSlug(this.firstParam)
      },
      page () {
        return this.$store.getters[`${config.namespaces.wordpress}/getItemBySlug`](this.firstParam)
      }
    },
    async fetch ({store, params}) {
      if (paramsParser.isSlug(params.firstParam)) {
        await store.dispatch(`${config.namespaces.wordpress}/getPageBySlug`, params.firstParam)
      }
    }
  }
</script>
