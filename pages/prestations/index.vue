<template>
  <div>
    <p>prestations</p>
    <nuxt-link to="/">Accueil</nuxt-link>
  </div>
</template>

<script>
  export  default {
    asyncData() {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    head: {
      title: 'Prestations page'
    }
  }
</script>