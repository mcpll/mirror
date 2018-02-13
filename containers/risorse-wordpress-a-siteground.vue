<template>
  <div>
    Risorse
    <div v-html="renderContent(page)"></div>
  </div>
</template>

<script>
  import mixin from '~/assets/js/containerMixin.js'
  export default {
    mixins: [mixin],
    props: {
      page: {
        type: Object
      }
    }
  }
</script>
