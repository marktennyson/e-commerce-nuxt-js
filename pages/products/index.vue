<template>
    <div id="content">
        <NavBar :isMenuActiveHome='false' :isMenuActiveProduct='true' :isMenuActiveOurTeam='false' :isMenuActiveContactUs='false' :isMenuActiveLogin='false' />
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
      <center><h1 class="sm:text-6xl text-2xl font-medium title-font mb-6 text-gray-900">Available Total Sunglasses</h1></center>
    <!-- <h1 class="sm:text-8xl text-3xl font-medium title-font mb-6 text-gray-900">Master Cleanse Reliac Heirloom</h1> -->
    <div class="flex flex-wrap -m-4">
      <div v-for="product in products" :key="product.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" :href="`/products/${product.slug}`">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="`${baseUrl}${product.images[0].formats.thumbnail.url}`">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Sunglasses</h3>
          <a :href="`/products/${product.slug}`" class="text-gray-900 title-font text-lg font-medium">{{ product.name }}</a>
          <p class="mt-1">&#8377; {{ product.price }}</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
<div id="Footer">
                    <Footer />
                  </div>
    </div>
    
        
</template>
<script>
import { baseUrl } from "../../assets/javascript/config";
  export default {
    data() {
      return {
        products: [],
        baseUrl:baseUrl,
      }
    },
    async fetch() {
      this.products = await fetch(
        `${baseUrl}/products`
      ).then(res => res.json())
    }
  }
</script>