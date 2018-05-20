<template>
  <div class="screen">
    <div class="back-image" slot="backImage" v-if="page==='index'"></div>
    <div class="back-color" slot="backColor" v-if="page==='index'"></div>
    <div class="grid-main">
      <app-header />
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import appHeader from '~/components/appHeader.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      appHeader
    },
    computed: mapState(['page'])
  }
</script>

<style lang="scss">
  $xl: 80%;
  $sm: 95%;

  html {
    font-family: "Open sans", serif;
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    @media (max-width: 360px) {
      font-size: 50%;
    }
    @media (max-width: 360px) {
      font-size: 50%;
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .screen {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "all";

    .back-image {
      grid-area: all;
      background-image: url("~/assets/images/2.jpg");
      background-size: cover;
    }

    & .back-color {
      grid-area: all;
      background-color: rgba(0,5,8,.75);
    }

    .grid-main {
      grid-area: all;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
      grid-template-areas: "header" "content";

      width: $xl;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 600px) {
        width: $sm;
      }

    }
  }

  .page-enter-active {
    transition: opacity 0.25s ease-out;
  }

  .page-leave-active {
    transition: opacity 0.25s ease-in;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }

</style>
