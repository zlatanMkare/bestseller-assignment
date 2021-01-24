<template>
     <div class="container">
          <b-row>
               <b-col cols="12" class="py-5">
                    <h2 class="text-left">Category: {{$route.params.label}}</h2>
                    <small>{{$route.params.id}}</small>
               </b-col>
          </b-row>

          <b-row v-if="categoryProducts.length > 1">
               <b-col md="4" v-for="(product, index) in categoryProducts" :key="product.id">
                    <b-card
                         img-alt="Image"
                         img-top
                         tag="article"
                         style="max-width: 20rem;"
                         class="mb-2"
                    >
                         <template v-if="typeof productImages[index] == 'object'">
                              <b-img fluid :src="productImages[index][Object.keys(productImages[index])[0]]"></b-img>
                         </template>
                         <b-img v-else fluid src="http://placehold.jp/416x555.png"></b-img>

                         <div class="description">
                              <p class="text-lowercase" v-if="product.name.en">{{ product.name.en }}</p>
                              <p class="text-lowercase" v-else>{{ product.name.dk }}</p>
                              <b-card-text>
                                   <strong>{{ product.price }} kr.</strong>
                              </b-card-text>
                              <b-button v-if="product.name.en" :to="{ name: 'product', params: { id: product.id, label: product.name.en } }" variant="primary">View More</b-button>
                              <b-button v-else :to="{ name: 'product', params: { id: product.id, label: product.name.dk } }" variant="primary">View More</b-button>
                         </div>
                              
                    </b-card>
               </b-col>
          </b-row>

          <b-row v-else>
               <b-col cols="12">
                    <b-alert show>There are no products in this category. Please choose another category</b-alert>
               </b-col>
          </b-row>
          
     </div>
</template>

<script>
     import json from './data/data.json'

     export default {
          data () {
               return {
                    products: json.products
               }
          },

          computed: {
               category() {
                    return this.$route.params.id
               },

               categoryProducts() {
                    let products = []
                    this.products.forEach(product => {
                         if (product.categories.includes(this.category)) {
                              products.push(product)
                         }
                    })
                    return products
               },

               productImages() {
                    let image = [];
                    this.categoryProducts.forEach(element => {
                         image.push(element.images)
                    });
                    return image;
               }
          }
     }
</script>

<style lang="scss" scoped>

</style>