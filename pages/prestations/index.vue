<template>
  <div class="prestations">
    <prestation
      h1="Création de sites internet vitrine, commerce ou pro"
      :card="{
        img: 'card1.png',
        alt: 'Développeur web internet avec laravel et vuejs à Tours 37',
        p1: 'vitrine',
        p2: 'e-commerce',
        p3: 'professionnel',
        href: '/realisations',
        linkTitle: 'sites internet développés avec laravel et vuejs à Tours',
        innerText: 'Voir les réalisations'
      }"
      :digest="{
        icon1: 'far fa-lightbulb',
        icon2: 'fas fa-magic',
        icon3: 'fas fa-cog',
        txt1: 'vous avez une idée de création de site internet, mais vous ne possédez pas les compétences requises pour sa réalisation?',
        txt2: 'Vous possédez un site internet que vous souhaitez moderniser?',
        txt3: 'Vous souhaitez ajouter de nouvelles fonctionnalités à votre site internet?'
      }"
      :speech="{
        href: '/',
        linkTitle: 'site codeheures.fr. Agence web pour le développement de sites internet et sites mobiles à Tours 37.',
        innerText: ' CODEheures.fr ',
        txtBefore: '',
        txtAfter: ' c\'est un savoir faire et des compétences <strong>au service du client</strong>'
      }"
      :priorities="{
        h2: 'Mes priorités pour vous',
        icon1: 'fas fa-balance-scale',
        icon2: 'fas fa-rocket',
        icon3: 'fas fa-magic',
        txt1: 'Un juste prix calculé au plus proche de votre besoin.',
        txt2: 'Un démarrage rapide du projet axé sur l\'obtention concrète.',
        txt3: 'Une transformation de vos idées la plus précise possible en apparence, efficacité et ergonomie'
      }"
    ></prestation>
    <prestation
      h1="Maintenance de votre site internet"
      :card="{
        img: 'card2.png',
        alt: 'maintenance de sites web php javascript et réseaux sociaux',
        p1: 'Mises À Jour',
        p2: 'Dépannages',
        p3: 'Modération',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLScrk8x-0RMkt4xzhFYC0jiwbU_YNYElWBiosjyyItr7Nrb1BA/viewform',
        linkTitle: 'devis pour votre création de sites internet développés avec laravel et vuejs à Tours',
        innerText: 'Devis en 3mn'
      }"
      :digest="{
        icon1: 'far fa-edit',
        icon2: 'fas fa-sliders-h',
        icon3: 'fas fa-users',
        txt1: 'Le contenu de votre site internet a besoin d\'être mis à jour?',
        txt2: 'Votre site internet présente un problème de fonctionnement?',
        txt3: 'Vous souhaitez déléguer la modération de votre site internet ou de vos pages sociales?'
      }"
      :speech="{
        href: '/',
        linkTitle: 'codeheures.fr, developpeur freelance de sites internet, ecommerces et sites mobiles',
        innerText: ' CODEheures.fr ',
        txtBefore: '',
        txtAfter: ' des prestations ponctuelles ou récurrentes en webmastering'
      }"
      :priorities="{
        h2: 'Mes priorités pour vous',
        icon1: 'far fa-life-ring',
        icon2: 'fas fa-lock',
        icon3: 'fas fa-graduation-cap',
        txt1: 'Un support de qualité, rapide et efficace.',
        txt2: 'La confidentialité et la mise en sécurité de vos données',
        txt3: 'Une transmission totale des savoirs en cas de mutation du service'
      }"
    ></prestation>
    <prestation
      h1="Combien coûte un site internet?"
      :withCost="true"
      :speech="{
        href: '/',
        linkTitle: 'site codeheures.fr. Réalisation de sites web à Tours 37.',
        innerText: ' CODEheures.fr ',
        txtBefore: 'Pour cela ',
        txtAfter: ' peut vous proposer plusieurs type de solutions.'
      }"
    ></prestation>
  </div>
</template>

<script>
  import Prestation from '~/components/Prestation.vue'
  export  default {
    components: {
      prestation: Prestation
    },
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
  @import "~/assets/css/_vars.scss";

  .prestations {
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