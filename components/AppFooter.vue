<template>
  <footer>
    <div class="infos">
      <address>Sylvain Gagnot - CODEheures EIRL<br>1 rue Milhaud<br>37300 Joué-Lès-Tours</address>
      <p class="phone"><i class="ion-ios-telephone-outline"> </i>06.87.34.06.83</p>
      <p><i class="ion-ios-email-outline"> </i>webmaster@codeheures.fr</p>
    </div>
    <div class="legale">
      <div class="links">
        <nuxt-link to="/mentions-legales">mentions légales</nuxt-link>
        <nuxt-link to="/conditions-generales-de-ventes">Conditions Générales de ventes</nuxt-link>
      </div>
      <hr>
      <h3>Horaires:</h3>
      <p>8h-12h | 14h-18h</p>
    </div>
    <div class="copyright">
      <p><img src="~/assets/images/codeheures-court.svg"><span class="htmlentity">©</span>2015 CODEheures<span class="logo"></span></p>
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