<template>
  <header>
    <div class="logo"><nuxt-link to="/"><img src="~/assets/images/codeheures.svg"/></nuxt-link></div>
    <div class="hamburger"><i class="fas fa-bars fa-3x" v-on:click="changeStateMobileMenu"></i></div>
    <nav :class="'menu ' + mobileMenuClass">
      <nuxt-link exact to="/">Accueil</nuxt-link>
      <nuxt-link to="/prestations">Prestations</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
  export default {
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

<style lang="scss">
  $color-yellow : #ffee7b;
  header {
    grid-area: header;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    & div.logo {
      grid-column: 1 / span 6;
      max-height: 100%;
      padding: 10px;

      & img {
        max-height: 80px;
        max-width: 100%;
      }

      @media (max-width: 600px) {
        grid-column: 1 / span 10;
        & img {
          max-height: 50px;
        }
      }

    }

    & div.hamburger {
      display: none;
      color: white;

      @media (max-width: 600px) {
        display: inline-block;
        grid-column: 11 / span 2;
        text-align: end;
        padding-right: 15px;
      }

    }

    nav {
      grid-column: 7 / span 6;
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

      @media (max-width: 600px) {
        opacity: 0;
        display: grid;
        height: 0%;
        background: #222;
        width: 100%;
        grid-column: 1 /span 12;
        z-index: 2;
        overflow-y: hidden;
        transition: all 0.8s;
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
          height: 100%;

        }
      }
    }



  }
</style>