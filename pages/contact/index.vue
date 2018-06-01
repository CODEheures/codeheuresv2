<template>
  <article class="contact">
    <div class="title">
      <h1><i class="fas fa-quote-left"></i>Me contacter</h1>
    </div>
    <p>Vous souhaitez des renseignements sur les prestations, un devis ou un avis sur un besoin en webmastering?
      Laissez-moi votre message avec votre adresse mail et éventuellement un numéro de téléphone par lequel je pourrai vous recontacter. </p>
    <form method="POST" action="#" accept-charset="UTF-8">
      <input name="_token" type="hidden" value="WDTDXseAgDGNxQyAls8O5yOO9gGYwqt1TTyBgzwv">
      <label for="email">Votre email</label>
      <input id="email" name="email" type="email" placeholder="Ex: jack.sparrow@pearl.bl">
      <label for="message">message</label>
      <textarea  id="message" rows="6" name="content" cols="50" placeholder="Votre message ici..."></textarea>
      <input type="submit" class="btn-yellow hover2" value="Envoyer le message" v-on:click.prevent.stop="submitMe">
    </form>
  </article>
</template>

<script>
  import axios from 'axios'

  export  default {
    transition (to, from) {
      return {name: 'slide-all-to-up', mode: ''}
    },
    asyncData(context) {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    head: {
      title: 'Contact page'
    },
    methods: {
      submitMe () {
        let that = this
        let contactRoute = 'http://localhost:8000/contact'
        console.log(contactRoute)
        axios.post(contactRoute,
          {'email': 'gagnot@laposte.net', 'message': 'Hello mon chere watson'})
          .then(function (response) {
            that.messageSendSuccess()
          })
          .catch(function (error) {
            console.log(error.response.data)
            that.messageSendError({message: error.response.data.errors.message[0]})
          })
      }
    },
    notifications: {
      messageSendSuccess: { // You can have any name you want instead of 'showLoginError'
        title: 'Message Envoyé',
        message: 'Message envoyé avec succès',
        type: 'success', // You also can use 'VueNotifications.types.error' instead of 'error'
        timeout: 5000
      },
      messageSendError: { // You can have any name you want instead of 'showLoginError'
        title: 'Erreur pendant l\'envoi du message',
        message: 'Oupss!! Votre message n\'a pas pû être envoyé...',
        type: 'warn', // You also can use 'VueNotifications.types.error' instead of 'error'
        timeout: 5000
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";

  .contact {
    grid-area: content;
    display: grid;
    grid-row-gap: 4rem;

    max-width: 100%;
    align-content: start;

    padding-left: $padding_xl;
    padding-right: $padding_xl;
    padding-top: 2rem;

    & form {
      display: grid;
      max-width: 600px;
      grid-template-columns: auto 1fr;
      grid-gap: 1rem;
      align-content: start;

      & input[type="submit"] {
        grid-column: 1 / span 2;
        justify-self: end;
      }
    }

    @media (max-width: $sm) {
      padding-left: $padding_sm;
      padding-right: $padding_sm;
    }
  }
</style>