<template>
  <article class="contact">
    <div class="title">
      <h1><i class="fas fa-quote-left"></i>Me contacter</h1>
    </div>
  </article>
</template>

<script>
  export  default {
    transition (to, from) {
      return {name: 'slide-all-to-up', mode: ''}
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