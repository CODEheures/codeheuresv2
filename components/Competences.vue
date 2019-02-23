<template>
  <article class="grid-prestation">
    <div class="title">
      <h1><i class="fas fa-quote-left"></i>{{ h1 }}</h1>
    </div>
    <div class="card" v-if="card !== undefined">
      <div class="wrapper" ref="wrapper">
        <img :src="'/images/'+card.img" :alt="card.alt">
        <transition name="slide-right">
          <div class="card_description" v-show="visible">
            <p>
              {{ card.p1 }}<br>
              {{ card.p2 }}<br>
              {{ card.p3 }}<br>
            </p>
            <template v-if="card.href.substr(0,4)==='http'">
              <a :href="card.href" class="btn-transparent" :title="card.linkTitle">{{ card.innerText }}</a>
            </template>
            <template v-else>
              <nuxt-link :to="card.href" class="btn-transparent" :title="card.linkTitle">{{ card.innerText }}</nuxt-link>
            </template>
          </div>
        </transition>
      </div>
    </div>
    <aside class="digest" v-if="digest !== undefined">
      <ul>
        <li><i :class="digest.icon1"></i><span>{{ digest.txt1 }}</span>
        </li>
        <li><i :class="digest.icon2"></i><span>{{ digest.txt2 }}</span>
        </li>
        <li><i :class="digest.icon3"></i><span>{{ digest.txt3 }}</span>
        </li>
      </ul>
      <div class="clear"></div>
    </aside>
    <div class="cost" v-if="withCost">
      <p>
        Bonne question! <br><br>
        Ce site était à l'origine le site de ma société freelance à laquelle j'ai mis fin en décembre 2018.
        Je l'utilise desormais comme un demonstrateur de mon savoir faire et une plateforme de tests (car pour la petite info celui-ci est développé en NUXT et tourne sur un docker routé avec traëfik)
        <br/><br/>
        Mes autres expériences sont multiples:<br/>
      </p>
      <ul class="circle">
        <li>
          J'ai développé un site nommé destockeurope (le bon coin des pros pour vendre en lots), qui n'est plus en ligne et pour lequel j'ai aussi été co-dirigeant.
          Malheureusement cette société n'a pas survécue.
        </li>
        <li>
          J'ai aussi tenté de monter une boutique en ligne qui n'a pas non plus
          survécu longtemps à la concurrence.
        </li>
        <li>
          J'ai fait plus de 10 ans de developpement logiciel dans l'indutrie de la CFAO.
        </li>
      </ul>
      <p>
        <br />Ajourd'hui je suis développeur fullstack au sein d'une industrie en charge de l'intranet et de l'application de pilotage de la fabrication.<br>
      </p>
    </div>
    <p class="speech" v-if="speech !== undefined">
      <span v-html="speech.txtBefore"></span>
      <nuxt-link :to="speech.href" :title="speech.linkTitle" class="a-invert">{{ speech.innerText }}</nuxt-link>
      <span v-html="speech.txtAfter"></span>
    </p>
    <div class="priorities" v-if="priorities !== undefined">
      <h2>{{ priorities.h2 }}</h2>
      <ul>
        <li><i :class="priorities.icon1"></i><span>{{ priorities.txt1 }}</span>
        </li>
        <li><i :class="priorities.icon2"></i><span>{{ priorities.txt2 }}</span>
        </li>
        <li><i :class="priorities.icon3"></i><span>{{ priorities.txt3 }}</span>
        </li>
      </ul>
    </div>
    <div class="devis">
      <a class="btn-yellow hover2" href="https://fr.linkedin.com/in/sylvain-gagnot" title="webmaster développeur fullstack symfony laravel php js" target="_blank">Mon linkedIN</a>
    </div>
  </article>
</template>

<script>
  export  default {
    props: {
      h1: {type: String, required: false},
      card: {type: Object, required: false},
      digest: {type: Object, required: false},
      speech: {type: Object, required: false},
      priorities: {type: Object, required: false},
      withCost: {type: Boolean, required: false, default: false}
    },
    data () {
      return {
        visible: false
      }
    },
    mounted () {
      if (this.card !== undefined){
        let observerOptions = {
          threshold: [0, 0.5]
        }

        let observer = new IntersectionObserver(this.setVisible, observerOptions);
        let target = this.$refs.wrapper;
        observer.observe(target);
      }
    },
    methods: {
      setVisible (entries, observer) {
        if (entries[0].intersectionRatio <= 0) {
          this.visible = false;
        } else if (entries[0].intersectionRatio >= 0.5) {
          this.visible = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";


  .grid-prestation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem 2rem;
    padding-bottom: 8rem;

    align-content: start;


    & .title {
      grid-column: 1 / span 2;
      & h1 {
        font-size: 2.8rem;
        font-weight: 400;
        text-decoration: underline;
        display: inline-block;
        @media (max-width: 1200px) {
          font-size: 2rem;
        }
        & i {
          text-decoration: underline;
        }
      }
    }

    & .card {
      grid-column: 1;

      @media (max-width: 900px) {
        grid-column: 1 /span 2;
      }
      & .wrapper {
        box-shadow: 0.3rem 0.3rem 2rem rgba(0,0,0,.6);
        position: relative;
        @media (max-width: 900px) {
          margin-left: auto;
          margin-right: auto;
        }

        & img {
          width: 100%;
          vertical-align: top;
        }
        & .card_description {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(~assets/images/card_bg.png);
          background-size: cover;

          padding: 3%;

          display: grid;
          grid-template-columns: 1fr;
          justify-items: end;
          align-items: end;
          align-content: end;

          & p {
            text-align: right;
            padding-right: .5rem;
            text-transform: capitalize;
            line-height: 2.6;
            font-size: 138%;
            letter-spacing: .1rem;
            color: hsla(0,0%,100%,.34);
            text-shadow: #102335 0 -0.2rem 0;
            font-weight: 600;
          }
        }
      }

    }

    & .digest {
      grid-column: 2;

      @media (max-width: 900px) {
        grid-column: 1 /span 2;
      }

      & ul {
        list-style: none;
        font-size: 2rem;
        font-weight: 100;

        & li {
          border-top: 1px solid $color_dark_green;
          display: grid;
          grid-template-columns: minmax(0,auto) 1fr;
          grid-column-gap: 2rem;
          align-items: center;
          padding-bottom: 3rem;
          padding-top: 3rem;

          & i {
            font-size: 4rem;
            @media (max-width: 1200px) {
              font-size: 3rem;
            }
          }
        }
        & li:last-of-type {
          border-bottom: 1px solid $color_dark_green;
        }

      }
    }

    & .speech {
      grid-column: 1 / span 2;
      justify-self: center;
      background-color: #d9703a;
      color: #fff;
      font-size: 1.92rem;
      border: .1rem solid #d9703a;
      padding: 1rem;
      border-radius: .35rem;
      font-weight: 400;
      text-align: center;

      & span /deep/ strong {
        font-weight: 500;
        text-decoration: underline;
      }
    }

    & .priorities {
      grid-column: 1 / span2;

      & h2 {
        line-height: 1;
        text-decoration: underline;
        font-weight: 100;
        font-size: 2rem;
      }

      & ul {
        list-style: none;
        font-weight: 100;
        font-size: 2rem;
        & li {
          display: grid;
          grid-template-columns: minmax(0,auto) 1fr;
          grid-column-gap: 2rem;
          align-items: center;
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;

          & i {
            font-size: 4rem;
            @media (max-width: 1200px) {
              font-size: 3rem;
            }
          }
        }
      }
    }

    & .devis {
      grid-column: 1 / span2;
      justify-self: center;
    }

    & .cost {
      grid-column: 1 / span2;
    }
  }


</style>