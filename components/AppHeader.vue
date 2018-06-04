<template>
  <header :class="{'shrink': (page !== 'index')}">
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/images/codeheures.svg" />
      </nuxt-link>
    </div>
    <div class="hamburger">
      <i class="fas fa-bars fa-3x" v-on:click="changeStateMobileMenu"></i>
    </div>
    <nav :class="'menu ' + mobileMenuClass">
      <nuxt-link exact to="/">Accueil</nuxt-link>
      <nuxt-link to="/prestations">Prestations</nuxt-link>
      <nuxt-link to="/realisations">Réalisations</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState(['page']),
    watch: {
      page () {
        this.mobileMenuClosed= true
        this.mobileMenuClass= 'closed-mobile'
      }
    },
    data () {
      return {
        mobileMenuClosed: true,
        mobileMenuClass: 'closed-mobile'
      }
    },
    methods: {
      changeStateMobileMenu () {
        this.mobileMenuClosed = !this.mobileMenuClosed;
        this.mobileMenuClass = this.mobileMenuClosed ? 'closed-mobile' : 'opened-mobile';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";


  header {
    z-index: 2;
    grid-area: header;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
    justify-content: space-between;
    transition: all 0.8s ease-out;

    padding-left: $padding_xl;
    padding-right: $padding_xl;

    @media (max-width: $sm) {
      padding-left: $padding_sm;
      padding-right: $padding_sm;
    }

    & div.logo {
      grid-column: 1;
      max-height: 100%;

      & img {
        max-height: 80px;
        max-width: 100%;
        transition: all 0.8s ease-out;

        @media (max-width: $sm) {
          max-height: 50px;
        }
      }
    }

    & div.hamburger {
      display: none;
      color: white;

      @media (max-width: $sm) {
        display: inline-block;
        grid-column: 2;
      }

    }

    nav {
      grid-column: 2;
      text-align: end;

      & a {
        color: white;
        text-decoration: none;
        padding-right: 0;
        text-transform: uppercase;
        font-size: 1.4rem;
        line-height: 1.8;
        margin: 0 .8vw;
        border-bottom: none;

        &.nuxt-link-active {
          color: $color-yellow;
        }
      }

      @media (max-width: $sm) {
        opacity: 0;
        display: grid;
        max-height: 0;
        background: #222;
        width: 100%;
        grid-column: 1 /span 2;
        z-index: 2;
        overflow-y: hidden;
        transition: max-height 1.8s ease-out;
        position: absolute;
        top: 65px;
        & a {
          font-size: 2rem;
          border-bottom: 1px solid #333;
          box-shadow: 0px -1px 1px 1px rgba(0, 0, 0, 0.23);
          &:active {
            background-color: #484643;
          }
        }
        &.opened-mobile {
          //visibility: visible;
          opacity: 1;
          max-height: 500px;
        }
      }
    }

    &.shrink {
      background: $color_back_header_footer;
      height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin-right: auto;
      margin-left: auto;
      width: 100%;
      grid-area: unset;
      box-shadow: 0px 5px 11px 0px rgba(38, 33, 33, 0.67);
      & div.logo img {
        max-height: 40px;
      }
    }

  }
</style>