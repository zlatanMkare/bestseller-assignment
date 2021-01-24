<template>
     <div>
          <Welcome msg="Welcome to Our Website"/>
          <products></products>
     </div>
</template>

<script>
     import Welcome from './components/Welcome.vue'
     import Products from './components/Products.vue'

     export default {
          components: {
               Welcome,
               Products
          }
     }
</script>