<template>
  <article class="content-type1">
    <div class="title">
      <h1><i class="fas fa-quote-left"></i>Me contacter</h1>
    </div>
    <p>Vous souhaitez des renseignements sur les prestations, un devis ou un avis sur un besoin en webmastering?
      Laissez-moi votre message avec votre adresse mail et éventuellement un numéro de téléphone par lequel je pourrai vous recontacter. </p>
    <form method="POST" action="#" accept-charset="UTF-8" @change="tests" @keyup="tests">
      <input name="_token" type="hidden" value="WDTDXseAgDGNxQyAls8O5yOO9gGYwqt1TTyBgzwv">
      <div class="form-group">
        <input :class="{valid: emailValid, invalid: emailInvalid}" id="email" name="email" type="email" placeholder="Votre email" ref="email" :required="!(emailValid || emailInvalid)" >
        <label for="email">Votre email</label>
        <span class="help-text"></span>
      </div>
      <div class="form-group">
        <textarea :class="{valid: messageValid, invalid: messageInvalid}"  id="message" rows="6" name="content" cols="50" placeholder="Votre message ici..." ref="message" :required="!(messageValid || messageInvalid)" ></textarea>
        <label for="message">Votre message</label>
        <span class="help-text"></span>
      </div>
      <input type="submit" class="btn-yellow hover2" value="Envoyer le message" v-on:click.prevent.stop="submitMe" :disabled="isSendOnce || !emailValid || !messageValid">
    </form>
  </article>
</template>

<script>
  import axios from 'axios'
  import Url from 'url'

  export  default {
    transition (to, from) {
      return {name: 'slide-all-to-up', mode: ''}
    },
    data () {
      return {
        isSendOnce: false,
        emailValid: false,
        emailInvalid: false,
        messageValid: false,
        messageInvalid: false
      }
    },
    head: {
      title: 'Contactez votre Webmaster, développeur web'
    },
    methods: {
      submitMe () {
        let myUrl = Url.parse(window.location.href)
        let contactRoute = myUrl.protocol + '//' + process.env.api.subdomain + '.' + myUrl.hostname + ':' + process.env.api.port + process.env.api.routes.contact.path
        let contactMethod = process.env.api.routes.contact.method
        if (!this.isSendOnce) {
          let that = this
          axios({
              method: contactMethod,
              url: contactRoute,
              data: {'email': that.$refs.email.value, 'message': that.$refs.message.value}
            })
            .then(function (response) {
              that.messageSendSuccess()
              that.isSendOnce = true
            })
            .catch(function (error) {
              try {
                that.messageSendError({message: error.response.data.errors.message[0]})
              } catch (e) {
                that.messageSendError()
              }
            })
        } else {
          this.messageAlreadySended()
        }
      },
      tests () {
        this.testEmail()
        this.testTextarea()
      },
      testEmail () {
        let value = this.$refs.email.value;
        if (value === undefined || value === null || value.length === 0) {
          this.emailValid = false;
          this.emailInvalid = false;
        } else {
          let regexRFC5322 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          this.emailValid = regexRFC5322.test(value);
          this.emailInvalid = !this.emailValid
        }
      },
      testTextarea () {
        let value = this.$refs.message.value;
        if (value === undefined || value === null || value.length === 0 ) {
          this.messageValid = false;
          this.messageInvalid = false;
        } else {
          this.messageValid = value.length >= 10;
          this.messageInvalid = !this.messageValid
        }
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
      },
      messageAlreadySended: { // You can have any name you want instead of 'showLoginError'
        title: 'Message déjà envoyé',
        message: 'Vous avez déjà envoyé un message',
        type: 'warn', // You also can use 'VueNotifications.types.error' instead of 'error'
        timeout: 5000
      }
    }
  }
</script>