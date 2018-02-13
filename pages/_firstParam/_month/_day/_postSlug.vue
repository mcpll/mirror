<template>
  <post :post="post"></post>
</template>

<script>
  import config from '~/config'
  import Post from '~/containers/post.vue'

  export default {
    components: {
      Post
    },
    computed: {
      postSlug () {
        return this.$route.params.postSlug
      },
      post () {
        return this.$store.getters[`${config.namespaces.wordpress}/getItemBySlug`](this.postSlug)
      }
    },
    async fetch ({store, params}) {
      await store.dispatch(`${config.namespaces.wordpress}/getPostBySlug`, params.postSlug)
    }
  }
</script>
