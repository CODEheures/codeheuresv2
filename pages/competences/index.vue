<template>
  <div class="content-type1">
    <competence
      h1="Compétence n°1: Développeur FullStack PHP/JS"
      :card="{
        img: 'card1.png',
        alt: 'Développeur web internet avec symfony, laravel, vuejs, docker à Tours 37',
        p1: 'Symfony',
        p2: 'Laravel',
        p3: 'PHP - JS',
        href: '/realisations',
        linkTitle: 'sites internet développés avec symfony, laravel, vuejs, docker à Tours',
        innerText: 'Voir les réalisations'
      }"
      :digest="{
        icon1: 'fas fa-magic',
        icon2: 'fas fa-server',
        icon3: 'fab fa-php',
        txt1: 'Je crée des sites et application web en utilisant principalement symfony, laravel, drupal',
        txt2: 'J\'installe et je déploie les sites web sur les serveurs linux ou windows',
        txt3: 'Je développe backend et frontend avec PHP/JS'
      }"
      :speech="{
        href: '/',
        linkTitle: 'Sylvain GAGNOT, développeur web à Tours 37.',
        innerText: ' Sylvain GAGNOT ',
        txtBefore: '',
        txtAfter: ' compétences en PHP, JS, LINUX et Frameworks Symfony, Laravel, VueJS, Nuxt, Docker, Traëfik...'
      }"
      :priorities="{
        h2: 'Mes Atouts',
        icon1: 'fas fa-graduation-cap',
        icon2: 'fas fa-rocket',
        icon3: 'fab fa-raspberry-pi',
        txt1: 'Une envie permanente d\'apprendre et de progresser.',
        txt2: 'Une adaptabilité à toute techno par l\'apprentissage.',
        txt3: 'Une curiosité débordante '
      }"
    ></competence>
    <competence
      h1="Compétence n°2: Maintenance et débuggage"
      :card="{
        img: 'card2.png',
        alt: 'maintenance de sites web php javascript et réseaux sociaux',
        p1: 'Mises À Jour',
        p2: 'Dépannages',
        p3: 'Modération',
        href: 'https://fr.linkedin.com/in/sylvain-gagnot',
        linkTitle: 'linkedIn Sylvain GAGNOT',
        innerText: 'Mon linkedIn'
      }"
      :digest="{
        icon1: 'far fa-edit',
        icon2: 'fas fa-ambulance',
        icon3: 'fas fa-cog',
        txt1: 'Je mets à jour les contenus et le code obsolète',
        txt2: 'Je debug tout type de site web',
        txt3: 'J\'administre serveurs et applications'
      }"
      :speech="{
        href: '/',
        linkTitle: 'Sylvain GAGNOT, développeur web à Tours 37.',
        innerText: ' Sylvain GAGNOT ',
        txtBefore: '',
        txtAfter: ' compétences en PHP, JS, LINUX et Frameworks Symfony, Laravel, VueJS, Nuxt, Docker, Traëfik...'
      }"
      :priorities="{
        h2: 'Mes autres qualités',
        icon1: 'fas fa-hands-helping',
        icon2: 'fas fa-star',
        icon3: 'fas fa-tachometer-alt',
        txt1: 'Je suis une personne de confiance et engagée',
        txt2: 'J\'aime la qualité et les dévelopement robustes et bien finis',
        txt3: 'Je reste concentré sur mes objectifs tant qu\'ils ne sont pas atteints'
      }"
    ></competence>
    <competence
      h1="Que savoir de plus?"
      :withCost="true"
      :speech="{
        href: '/',
        linkTitle: 'Sylvain GAGNOT, développeur web à Tours 37.',
        innerText: '',
        txtBefore: 'Je reste ouvert aux autres langages de programmations: ',
        txtAfter: ' C, C++, JAVA etc... et j\'aimerai bien aussi faire du développement applicatif systeme.'
      }"
    ></competence>
  </div>
</template>

<script>
  import Competences from '~/components/Competences.vue'
  export  default {
    components: {
      competence: Competences
    },
    transition (to, from) {
      if (from && from.name === 'index') {
          return {name: 'slide-all-to-up', mode: ''}
      } else {
        return {name: 'slide-all-to-down', mode: ''}
      }
    },
    head: {
      title: 'Compétences Symfony, Laravel, VueJS, Docker, Traefik'
    }
  }
</script>
