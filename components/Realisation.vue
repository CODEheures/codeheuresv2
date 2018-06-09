<template>
  <div class="card">
    <h2>{{ card.title }}</h2>
    <img :src="'/images/'+card.img"/>
    <slot name="description"></slot>
    <div class="links">
        <a v-for="(link, index) in card.links" target="_blank" :href="link.href" class="btn-yellow-invert" :key="index">{{ link.innerText }}</a>
    </div>
  </div>
</template>

<script>
  export  default {
    props: {
      card: {type: Object, required: false},
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_vars.scss";

  $border_radius: 0.6rem;

  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px auto 1fr auto;
    align-content: start;
    width: 300px;

    @media (min-width: $xsm) {
      width: 350px;
    }

    border-radius: $border_radius;
    box-shadow: 0 0 2rem 0 rgba(0,0,0,.5);
    background-color: #fff;
    padding-bottom: 1rem;

    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;

    & h2 {
      background-color: lighten($color_dark_green, 20%);
      color: white;
      text-align: center;
      font-weight: 100;
      font-family: "Open Sans", sans-serif;
      border-top-left-radius: $border_radius;
      border-top-right-radius: $border_radius;
      text-transform: capitalize;
    }

    & img {
      max-width: 100%;
      height: 172px;
      @media (min-width: $xsm) {
        height: 201px;
      }
      justify-self: center;
    }

    & p.description {
      padding: 2rem;
      font-size: 1.5rem;
      border-top: 1px solid rgba(0,0,0,0.2);
    }

    & div.links {
      display: flex;
      justify-content: center;
      align-self: end;
    }
  }


</style>