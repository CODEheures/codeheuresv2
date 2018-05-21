<template>
  <div>
    <p>contact</p>
    <nuxt-link to="/">Accueil</nuxt-link>
  </div>
</template>

<script>
  export  default {
    transition (to, from) {
      //return 'slide-all-up'
    },
    asyncData(context) {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    head: {
      title: 'Contact page'
    }
  }
</script>