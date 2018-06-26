<template>
  <article class="content-type1">
    <div class="title">
      <h1><i class="fas fa-cogs"></i>Applications Web Personnalisées</h1>
    </div>
    <div class="row-cards">
      <realisation
        :card="{
          title: 'à venir: Selfjob',
          img: 'selfjob.jpg',
          links: [
            {innerText: 'Nouveau site', href: 'https://selfjob.codeheures.fr'},
            {innerText: 'Vidéo', href: 'https://youtu.be/ZklNr5oyn4A'}
          ]
        }"
      >
        <p slot="description" class="description">Cette future application, permet un recrutement sans CV basé sur l'affinité des personnalités.
          <br>Initialement réalisée avec <a class="a-invert-light" href="http://quasar-framework.org">Quasar</a> et <a class="a-invert-light" href="https://laravel.com">Laravel</a>
          une nouvelle version utilisant l'excellent framework <a class="a-invert-light" href="https://vuetifyjs.com/en/">Vuetify</a> est en cours de développement
        </p>
      </realisation>
      <realisation
        :card="{
          title: 'Destockeurope.com',
          img: 'destockeurope.jpg',
          links: [
            {innerText: 'Voir le site', href: 'https://destockeurope.com'}
          ]
        }"
      >
        <p slot="description" class="description">Cette application, compatible sur support mobile,  permet la mise en ligne d'annonces de destockage entre professionnels.
          <br>Réalisée avec <a class="a-invert-light" href="https://laravel.com">Laravel</a>, <a class="a-invert-light" href="https://vuejs.org/">VueJS</a> et <a class="a-invert-light" href="https://semantic-ui.com/">SemanticUI</a>
        </p>
      </realisation>
    </div>
    <div class="title">
      <h1><i class="fas fa-desktop"></i>Sites vitrines</h1>
    </div>
    <div class="row-cards">
      <realisation
        :card="{
          title: 'Rythme & Danses',
          img: 'rythmedanses.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://rythmedanses.wix.com/rythmedanses'}
          ]
        }"
      >
        <p slot="description" class="description">Réalisé sous wix (montage vidéos de présentation réalisé par <a class="a-invert-light" href="https://codeheures.fr">CODEheures</a>)
        </p>
      </realisation>
      <realisation
        :card="{
          title: 'Sogeres Grand-Ouest',
          img: 'sogeresgo.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://www.ce-sogeres-grandouest.fr/'}
          ]
        }"
      >
        <p slot="description" class="description">Réalisé sous wix et maintenu par <a class="a-invert-light" href="https://codeheures.fr">CODEheures</a> pour le C.E. Sogeres Grand Ouest
        </p>
      </realisation>
      <realisation
        :card="{
          title: 'Sogeres Île de France',
          img: 'sogeresidf.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://www.ce-sogeres-idf.fr/'}
          ]
        }"
      >
        <p slot="description" class="description">Réalisé sous wix et maintenu par <a class="a-invert-light" href="https://codeheures.fr">CODEheures</a> pour le C.E. Sogeres Île de France
        </p>
      </realisation>
    </div>
    <div class="title">
      <h1><i class="fas fa-paint-brush"></i>Intégrations</h1>
    </div>
    <div class="row-cards">
      <realisation
        :card="{
          title: 'P.O.E.M',
          img: 'poem.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://poem.codeheures.fr/'},
            {innerText: 'back-office', href: 'http://poem.codeheures.fr/back.php'}
          ]
        }"
      >
        <p slot="description" class="description">Intégration html/css/js complete (connexion possible avec user+mot de passe vide)
        </p>
      </realisation>
      <realisation
        :card="{
          title: 'Fiche Produit + Menu Responsive',
          img: 'ficheproduit.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://ficheproduit.codeheures.fr/'}
          ]
        }"
      >
        <p slot="description" class="description">Intégration d'une fiche produit et son menu en responsive design (mobile first). Technologie Flexbox.
        </p>
      </realisation>
      <realisation
        :card="{
          title: 'Edania',
          img: 'edania.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://edania.codeheures.fr/'}
          ]
        }"
      >
        <p slot="description" class="description">Intégration d'un site pour animaux. Pictos par <a class="a-invert-light" href="https://codeheures.fr">CODEheures</a>.
        </p>
      </realisation>
    </div>
    <div class="title">
      <h1><i class="fas fa-flask"></i>Tests</h1>
    </div>
    <div class="row-cards">
      <realisation
        :card="{
          title: 'Frigo',
          img: 'frigo.jpg',
          links: [
            {innerText: 'Voir l\'application', href: 'http://frigo.codeheures.fr/'}
          ]
        }"
      >
        <p slot="description" class="description">Développement html/css/js/php d'une application pour gérer son frigo
        </p>
      </realisation>
      <realisation
        :card="{
          title: 'Site du RIDI',
          img: 'ridi.jpg',
          links: [
            {innerText: 'Voir le site', href: 'http://lpatc-cms.codeheures.fr/'}
          ]
        }"
      >
        <p slot="description" class="description">Développement d'un site avec CMS DRUPAL dans le cadre d'un travail avec l'université de strasbourg
        </p>
      </realisation>
    </div>
  </article>
</template>

<script>
  import Realisation from "~/components/Realisation"
  export  default {
    components: {
      realisation: Realisation
    },
    transition (to, from) {
      if (from && (from.name === 'index' || from.name === 'prestations')) {
          return {name: 'slide-all-to-up', mode: ''}
      } else {
        return {name: 'slide-all-to-down', mode: ''}
      }
    },
    head: {
      title: 'Realisation page'
    }
  }
</script>

<style lang="scss" scoped>

  .row-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

</style>
