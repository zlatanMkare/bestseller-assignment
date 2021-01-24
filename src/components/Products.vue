<template>
     <div class="container">
          <div class="products">
               <b-row>
                    <b-col md="12" class="my-4">
                         <b-form>
                              <b-form-input size="lg" class="mr-sm-2" placeholder="Search for product" v-model="search"></b-form-input>
                         </b-form>
                    </b-col>
               </b-row>

               <b-row>
                    <b-col md="4" v-for="(product, index) in filteredProducts" :key="product.id">
                         <b-card
                              img-alt="Image"
                              img-top
                              tag="article"
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
                                   <b-button v-if="product.name.en" :to="{ name: 'product', params: { id: product.id, label: product.name.en } }" variant="info">View More</b-button>
                                   <b-button v-else :to="{ name: 'product', params: { id: product.id, label: product.name.dk } }" variant="info">View More</b-button>
                              </div>
                              
                         </b-card>
                    </b-col>
               </b-row>
          </div>
     </div>
</template>

<script>
     import json from '../data/data.json'

     export default {
          data () {
               return {
                    products: json,
                    search: ''
               }
          },

          computed: {
               filteredProducts() {
                    return this.products.products.filter(product => {
                         return product.name.en.toLowerCase().includes(this.search.toLowerCase())
                    })
               },
               productImages() {
                    let image = [];

                    this.filteredProducts.forEach(element => {
                         image.push(element.images)
                    });

                    return image;
               }
          }
     }
</script>

<style lang="scss" scoped>
     
</style>