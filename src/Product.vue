<template>
     <div>
          <b-container>
               <b-row class="my-5"> 
                    <b-col md="6">
                         <b-carousel
                              id="carousel-fade"
                              style="text-shadow: 0px 0px 2px #000"
                              fade
                              controls
                              img-width="1024"
                              img-height="80"
                         >
                              <b-carousel-slide v-for="image in product.images" :key="image"
                                   :img-src="image"
                              ></b-carousel-slide>
                         </b-carousel>
                    </b-col>
                    <b-col md="6">
                         <p class="mb-3">{{ product.brand }}</p>
                         <h2 v-if="product.name.en" class="text-lowercase">{{ product.name.en }}</h2>
                         <h2 v-else class="text-lowercase">{{ product.name.dk }}</h2>
                         <p class="my-3">In stock: {{ product.stock }}</p>
                         <p class="my-3">Color: {{ product.color }}</p>

                         <b-form-select v-model="selected" :options="product.size">
                              <template #first>
                                   <b-form-select-option :value="null" disabled> Please select your size </b-form-select-option>
                              </template>
                         </b-form-select>

                         <h3 class="my-4">{{ product.price }} kr.</h3>
                         <b-button class="btn-block btn-lg" variant="info">Add to cart</b-button>

                         <!-- Call to action -->
                         <div class="mt-5">
                              <p><b-icon variant="success" icon="truck"></b-icon> Free shipping on orders over 500 kr.</p>
                              <p><b-icon variant="success" icon="arrow-counterclockwise"></b-icon> 100 days free returns</p>
                              <p><b-icon variant="success" icon="shield-lock"></b-icon> Easy payments</p>
                         </div>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>
     import json from './data/data.json'

     export default {
          data () {
               return {
                   products: json.products,
                   selected: null
               }
          },

          computed: {
               product () {
                    const id = this.$route.params.id;
                    return this.products.find(product => product.id == id)
               }
          }
     }
</script>

<style lang="scss" scoped>

</style>