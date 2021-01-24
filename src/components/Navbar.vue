<template>
     <div>
          <b-navbar toggleable="lg" type="light" variant="default">
               <b-container>
                    <b-navbar-brand class="logo" to="/">Shopping</b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                         <!-- Right aligned nav items -->

                         <b-navbar-nav class="ml-auto">
                              <b-nav-item to="/">Home</b-nav-item>
                              
                              <div v-for="category in categories" :key="category.id" href="#" class="category">
                                   <div v-for="items in category.categories" :key="items.id">
                                        <b-nav-item-dropdown :text="items.name.en" right>
                                             <div v-for="item in items.categories" :key="item.id">
                                                  <b-dropdown-item :to="{ name: 'category', params: { id: item.id, label: item.name.en } }">
                                                       {{item.name.en}}
                                                  </b-dropdown-item>
                                             </div>
                                        </b-nav-item-dropdown>
                                   </div>
                              </div>

                              <template v-if="typeof categories[1] == 'object'">
                                   <b-nav-item :to="{ name: 'category', params: { id: categories[1].id, label: categories[1].name.en } }">
                                        {{categories[1].name.en}}
                                   </b-nav-item>
                              </template>
                              
                              <b-nav-item class="mr-3" href="#"> 
                                   <b-icon icon="cart-fill" variant="dark" font-scale="1.5"></b-icon> Cart (0)
                              </b-nav-item>
                         </b-navbar-nav>
                    </b-collapse>
               </b-container>
          </b-navbar>
     </div>
</template>

<script>
     import json from '../data/data.json'

     export default {
          data () {
               return {
                    categories: json.categories.categories
               }
          }
     }
</script>

<style lang="scss" scoped>
     .navbar {
          border-bottom: 1px solid #eee;
          .logo {
               font-weight: 600;
               text-transform: uppercase;
               font-size: 25px;
          }
          .category {
               display: inline-flex;
          }
     }

     @media (max-width: 991px) {
          .category {
               display: block !important;
          }
     }
</style>