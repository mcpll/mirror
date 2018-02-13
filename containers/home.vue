<template>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt-press
      </h1>
      <h2 class="subtitle">
        Another Wordpress theme in Nuxt.js
      </h2>
      <div v-html="pages"></div>
    </div>
  </section>
</template>

<script>
  import config from '~/config'

  export default {
    props: {
      pages: {
        type: Array
      }
    }
  }
</script>
