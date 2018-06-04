<template>
  <div class="content-type1">

  </div>
</template>

<script>
  export  default {
    transition (to, from) {
      if (from && (from.name === 'index' || from.name === 'prestations')) {
          return {name: 'slide-all-to-up', mode: ''}
      } else {
        return {name: 'slide-all-to-down', mode: ''}
      }
    },
    asyncData(context) {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client'),
      }
    },
    head: {
      title: 'Realisation page'
    }
  }
</script>