<template>
    <div id="content">
      <NavBar :isMenuActiveHome='false' :isMenuActiveProduct='true' :isMenuActiveOurTeam='false' :isMenuActiveContactUs='false' :isMenuActiveLogin='false' />
        <section class="text-gray-600 body-font overflow-hidden">
  <div v-if="product" class="container px-5 py-24 mx-auto">

    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ product.catagory.name }}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ product.name }}</h1>
        <div class="flex mb-4">
          <a @click="openDesc()" :class="isDescOpen ? activeButtonClass : defaultButtonClass" href="#">Description</a>
          <a @click="openReviews()" :class="isReviewsOpen ? activeButtonClass : defaultButtonClass" href="#">Reviews</a>
          <a @click="openDetails()" :class="isDetailsOpen ? activeButtonClass : defaultButtonClass" href="#">Details</a>
        </div>
        <p v-if="isDescOpen" class="leading-relaxed mb-4" id="desc_content">{{ product.description }}</p>
        <p v-if="isReviewsOpen" class="leading-relaxed mb-4" id="desc_content">{{ product.reviews }}</p>
        <p v-if="isDetailsOpen" class="leading-relaxed mb-4" id="desc_content">{{ product.details }}</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Dsicount Amount</span>
          <span class="ml-auto text-gray-900">&#8377;{{ product.discount_price }}</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Discount Percentage</span>
          <span class="ml-auto text-gray-900">{{ product.discount_percentage }}%</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">1</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">&#8377;{{ product.price }}</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="`${baseUrl}${product.images[0].formats.thumbnail.url}`" />
    </div>
  </div>
  <div v-else>
    <h3>Invalid slug code</h3>
  </div>
</section>
<Footer />
    </div>
</template>

<script>
import { baseUrl } from "../../assets/javascript/config";
// import { Hooper, Slide } from 'hooper';
// import 'hooper/dist/hooper.css';

export default {
  data () {
    return {
      baseUrl:baseUrl,
      isDescOpen:true,
      isReviewsOpen:false,
      isDetailsOpen:false,
      activeButtonClass : "flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1",
      defaultButtonClass : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1",
    }
  },
  methods: {
        openReviews(){
          this.isDescOpen=false;
          this.isReviewsOpen=true;
          this.isDetailsOpen=false;
        },
        openDetails(){
          this.isDescOpen=false;
          this.isReviewsOpen=false;
          this.isDetailsOpen=true;
        },
        openDesc(){
          this.isDescOpen=true;
          this.isReviewsOpen=false;
          this.isDetailsOpen=false;
        },
        // imageToggle(data){
        //   const idUrl1 = this.baseUrl+data[0].formats.thumbnail.url;
        //   const idUrl2 = this.baseUrl+data[1].formats.thumbnail.url;
        //   if (this.imageId === data[0].id) this.imageSrc = idUrl2;
        //   else this.imageSrc = idUrl1;
        // }
      },
    async asyncData({ params }){
        const slug = params.slug;
        const product = await fetch(`${baseUrl}/products/?slug=${slug}`).then(res => res.json()).catch(err => {return [false]})
        // this.caroImgSrc1 = baseUrl+product[0].images[0].formats.thumbnail.url;
        // this.caroImgSrc2 = baseUrl+product[0].images[1].formats.thumbnail.url;
        // this.caroImgSrc3 = baseUrl+product[0].images[2].formats.thumbnail.url;
        return {product:product[0]}
    }
}
</script>