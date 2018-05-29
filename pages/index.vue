<template>
  <div class="grid-content">
    <article>
      <h1>Créations de sites internet</h1>
      <h2>
        Développeur WEB freelance, spécialiste <a href="https://laravel.com" title="création de sites internet avec backend laravel" target="_blank">Laravel</a> et <a href="https://vuejs.org" title="développement de sites web avec frontend vuejs" target="_blank">VueJS</a>
      </h2>
      <p>Création et maintenance de sites internets. Sous-traitance pour les agences web.</p>
      <p class="action">
        <a class="btn-transparent" href="https://docs.google.com/forms/d/e/1FAIpQLScrk8x-0RMkt4xzhFYC0jiwbU_YNYElWBiosjyyItr7Nrb1BA/viewform" title="devis pour votre création de sites internet développés avec laravel et vuejs à Tours" target="_blank">Demander un devis en 3mn</a>
        <nuxt-link to="/realisations" class="btn-yellow" title="webmaster sites internets">Réalisations</nuxt-link>
      </p>
    </article>
    <footer>
      <nuxt-link to="/prestations" title="site développés avec laravel et vuejs à Tours"><span>En savoir plus</span><i class="fas fa-angle-down fa-5x"></i></nuxt-link>
    </footer>
  </div>
</template>

<script>
  export default {
    transition (to, from) {
      if (to && to.name === 'index') {
        console.log('slide all to up index')
        return {name: 'slide-all-to-down', mode: ''}
      } else {

      }
    },
    head: {
      title: "Création de sites internet et sites mobiles à Tours"
    },
    data () {
      return {
        touch: {startX: 0, startY:0, startTime:0, endX:0, endY:0, endTime:0, thresholdY: 150, allowedTime: 400}
      }
    },
    mounted () {
      document.addEventListener('wheel', this.handleWheel, {passive: true})
      document.addEventListener('touchstart', this.handleTouchStart, {passive: true})
      document.addEventListener('touchend', this.handleTouchEnd, {passive: true})
    },
    beforeDestroy () {
      document.removeEventListener('wheel', this.handleWheel);
      document.removeEventListener('touchstart', this.handleTouchStart)
      document.removeEventListener('touchend', this.handleTouchEnd)
    },
    destroyed () {

    },
    methods: {
      handleWheel (event) {
        if(event.deltaY > 0) {
          this.$router.push('/prestations')
        }
      },
      handleTouchStart (event) {
        this.reinitTouch()
        let touchobj = event.changedTouches[0]
        this.touch.startX = touchobj.pageX
        this.touch.startY = touchobj.pageY
        this.touch.startTime = new Date().getTime() // record time when finger first makes contact with surface
        this.touch.endX = this.touch.startX
        this.touch.endY = this.touch.startY
        this.touch.endTime = this.touch.startTime
      },
      handleTouchEnd (event) {
        let touchobj = event.changedTouches[0]
        this.touch.endX = touchobj.pageX
        this.touch.endY = touchobj.pageY
        this.touch.endTime = new Date().getTime() // record time when finger first makes contact with surface
        if(this.touch.startY-this.touch.endY >= this.touch.thresholdY && this.touch.endTime-this.touch.startTime < this.touch.allowedTime) {
          this.reinitTouch()
          this.$router.push('/prestations')
        }
      },
      reinitTouch() {
        this.touch.startX = this.touch.startY = this.touch.startTime = this.touch.endX = this.touch.endY = this.touch.endTime = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";

  .grid-content {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100px;
    grid-template-areas: "body" "footer";
    padding-left: $padding_xl;
    padding-right: $padding_xl;
    max-height: 100vh;


    @media (max-width: $sm) {
      padding-left: $padding_sm;
      padding-right: $padding_sm;
    }
  }

  @keyframes to-down {
    0% {
      transform: translate3d(0,0,0);
    }
    70% {
      transform: translate3d(0,-1rem,0);
    }
    100% {
      transform: translate3d(0,0,0);
    }
  }

  article {
    grid-area: body;
    align-items: center;
    display: grid;
    text-align: center;
    align-content: center;
    color: white;

    & h1 {
      font-size: 4.6rem;
      line-height: 6rem;
      letter-spacing: .2rem;
      text-transform: uppercase;
      font-weight: 600;
      @media (max-width: 600px) {
        font-size: 3.5rem;
      }
    }

    & h2 {
      padding-top: 5rem;
      padding-bottom: .5rem;
      line-height: 2.4rem;
      font-size: 1.8rem;
      font-weight: 300;
      @media (max-width: 600px) {
        padding-top: 2rem;
      }
    }

    & p {
      &.action {
        margin-top: 4rem;
        @media (max-width: 600px) {
          display: grid;
          grid-row-gap: 10px;
        }
      }
    }

  }

  footer {
    grid-area: footer;
    text-align: center;

    & a {
      text-decoration: none;
      display: grid;
      grid-template-rows: auto auto;
      align-content: space-around;
      font-size: 1.5rem;
      overflow-y: hidden;
      animation: to-down 2s infinite;
    }

  }

</style>