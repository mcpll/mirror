<template>
  <div>
    <home :pages="pages"></home>
  </div>
</template>

<script>
  import config from '~/config'
  import Home from '~/containers/home.vue'
  export default {
    components: {
      Home
    },
    computed: {
      pages () {
        return this.$store.getters[`${config.namespaces.wordpress}/findPages`]
      }
    },
    async fetch ({store}) {
      await store.dispatch(`${config.namespaces.wordpress}/findPages`)
      await store.dispatch(`app/setLayout`, 'post')
      console.log('set')
    }
  }
</script>
