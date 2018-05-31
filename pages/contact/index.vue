<template>
  <div class="contact">
    <p>contact</p>
    <nuxt-link to="/">Accueil</nuxt-link>
  </div>
</template>

<script>
  export  default {
    transition (to, from) {
      if (to && to.name === 'index') {
        console.log('slide all down to index')
        return {name: 'slide-all-to-down', mode: ''}
      } else {

      }
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

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";

  .contact {
    grid-area: content;
    display: grid;
    grid-row-gap: 4rem;

    max-width: 100%;
    align-content: start;

    padding-left: $padding_xl;
    padding-right: $padding_xl;
    padding-top: 2rem;


    @media (max-width: $sm) {
      padding-left: $padding_sm;
      padding-right: $padding_sm;
    }
  }
</style>