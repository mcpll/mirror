<template>
  <div v-html="renderContent(post)"></div>
</template>

<script>
  import mixin from '~/assets/js/containerMixin.js'
  export default {
    mixins: [mixin],
    props: {
      post: {
        type: Object
      }
    }
  }
</script>
