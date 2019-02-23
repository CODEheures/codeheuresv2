<template>
  <footer>
    <div class="infos">
      <address>Sylvain Gagnot<br>1 rue Milhaud<br>37300 Joué-Lès-Tours</address>
      <p class="phone"><i class="ion-ios-telephone-outline"> </i>06.87.34.06.83</p>
      <p><i class="ion-ios-email-outline"> </i>webmaster@codeheures.fr</p>
    </div>
    <div class="legale">
      <div class="links">
        <nuxt-link to="/mentions-legales">mentions légales</nuxt-link>
        <a href="https://fr.linkedin.com/in/sylvain-gagnot">LinkedIN</a>
      </div>
      <hr>
      <h3>Compétences:</h3>
      <p>PHP | JS | SYMFONY | LARAVEL | VUEJS | LINUX | DOCKER...</p>
    </div>
    <div class="copyright">
      <p><img src="~/assets/images/codeheures-court.svg"><span class="htmlentity">©</span>2019 CODEheures<span class="logo"></span></p>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";


  footer {
    z-index: 2;
    grid-area: footer;
    align-items: center;
    display: grid;
    grid-template-columns: [infos]max-content [mentions]1fr [logo]max-content;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    justify-content: space-between;

    @media (max-width: $sm_footer) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "mentions mentions"
                            "infos logo";
      grid-row-gap: 30px;
    }

    background-color: $color_back_header_footer;
    color: white;

    padding-left: $padding_xl;
    padding-right: $padding_xl;
    padding-top: 1rem;
    padding-bottom: 1rem;

    & div.infos {
      grid-area: infos;
    }

    & div.legale {
      grid-area: mentions;
      max-width: 500px;
      width: 100%;
      justify-self: center;
      display: grid;
      height: 100%;
      align-content: space-between;
      @media (max-width: $sm_footer) {
        max-width: none;
      }
      & div.links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    & div.copyright {
      grid-area: logo;
      align-self: end;
      justify-self: end;
      & p {
        & img {
          width: 3rem;
        }
      }
    }

    @media (max-width: $sm) {
      padding-left: $padding_sm;
      padding-right: $padding_sm;
    }

  }
</style>