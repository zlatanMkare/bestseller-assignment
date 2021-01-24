<template>
     <div id="app">
          <navbar></navbar>
          <router-view></router-view>
          <bottom></bottom>
     </div>
</template>

<script>
     import Navbar from './components/Navbar.vue'
     import Bottom from './components/Footer.vue'

     export default {
          name: 'App',
          components: {
               Navbar,
               Bottom
          }
     }
</script>

<style>
#app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: #000;
}
</style>
