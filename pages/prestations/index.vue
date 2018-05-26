<template>
  <article class="grid-content">
    <h1>Prestations</h1>
  </article>
</template>

<script>
  export  default {
    transition (to, from) {
      if (from && from.name === 'index') {
          console.log('slide all to up prestations')
          return {name: 'slide-all-to-up', mode: ''}
      } else {

      }
    },
    asyncData(context) {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client'),
      }
    },
    head: {
      title: 'Prestations page'
    }
  }
</script>

<style lang="scss" scoped>
  $sm: 600px;

  $padding_xl: 10%;
  $padding_sm: 2.5%;

  .grid-content {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: $padding_xl;
    padding-right: $padding_xl;

    background: url("~/assets/images/background3.png") repeat fixed;
    background-color: #fff;

    @media (max-width: $sm) {
      padding-left: $padding_sm;
      padding-right: $padding_sm;
    }
  }


</style>