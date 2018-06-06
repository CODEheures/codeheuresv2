<template>
  <div>
    <app-header />
    <nuxt/>
    <app-footer v-if="page !== 'index'"/>
  </div>
</template>

<script>
  import appHeader from '~/components/AppHeader.vue'
  import appFooter from '~/components/AppFooter.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      appHeader,
      appFooter
    },
    computed: mapState(['page'])
  }
</script>

