<template>
     <div class="hello">
          <h1>{{ msg }}</h1>
     </div>
</template>

<script>
     export default {
          name: 'Welcome',
          props: {
               msg: String
          }
     }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .hello {
          padding: 5em 0;
          background: rgb(231 231 231);
          text-align: center;
     }
</style>
