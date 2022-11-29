<template>
    <div>
                <!-- Export Quality section start  -->
                <section>
            <div class="container mt-5">
                <div class="export-quality global-cat-sec">
                    <div class="section-cat-title">
                        <!-- <h2>export Deal</h2> -->
                        <h2>Export Quality</h2>
                    </div>
                    <div class="row global-cat-row mt-5">
                        <div class="col-lg-3 col-md-12 col-12 global-single-col">
                                <div class="global-single-item" >
                                    <div class="global-single-sec-text col-lg-7 col-md-12">
                                        <h2>
                                            Export Quality
                                        </h2>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="img" style="background-image: url(assets/images/categories-img/PREMIUM-EXPORTS-300x450.jpg);">

                                    </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 global-carousel-owl-col">
                           
                           <div class="owl-tab-type d-flex tabs">
                               <div class="btn" :class="{active:hot}" @click="exportHot">
                                   <i class="fas fa-fire"></i> HOT
                               </div>
                               <div class="btn" :class="{active:newClass}" @click="exportNew">
                                   <i class="fas fa-fire"></i>  NEW ARRIVAL
                               </div>
                           </div>
                 
                           <loading v-if="seen"/>
                              <div class="row row deal-day-row" v-if="seen == false">
                               <carousel :items-to-show="5" v-if="export_hot">
                               <slide  v-for="hot in products.hot" :key="hot.id">
                               <div class=" product p-2">
                               <div class="discount-tag d-none">
                                -48%
                               </div>
                               <div class="options-pannel2">
                           <ul>
                               <li class="d-lg-block d-md-block d-none" title="compare">
                                   <a href="#" class="compare" @click.prevent="addToCompareList(hot)">
                                       <i class="fas fa-random"></i>
                                   </a>
                               </li>
                               <li title="Quick View" class="d-lg-block d-md-block d-none">
                                   <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(hot.id)">
                                       <i class="fas fa-search"></i>
                                   </a>
                               </li>
                               <li title="Add To Wishlist">
                                   <a href="#" class="compare" @click.prevent="AddToWishList(hot)">
                                       <i class="far fa-heart"></i>
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div class="images">
                           <router-link :to="'/product-details?id='+ hot.id">
                               <img :src="hot.image_url" @error="hot.image_url='assets/images/products/default-image.jpg'" alt="Image" class="main-image" /> 
                           </router-link>
                       </div>
                       
                       <div class="product-details text-center pt-2">
                           
                           <div class="product_name">
                               <router-link :to="'/product-details?id='+ hot.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{hot.product}}
                               </router-link>
                           </div>
                           <div class="price">
                               <del class="text-muted">{{hot.variation.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{hot.variation.default_sell_price}}৳</span>
                           </div>
                           <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" @click.prevent="AddToCart(hot)">
                               <div class="button m-auto text-light">
                                   <p><b>
                                       BUY NOW
                                   </b></p>
                                   <span>
                                       <i class="fas fa-shopping-cart"></i>
                                   </span>
                               
                           </div>
                           </a>
                           </div>
                               </div>  
                               </slide>

                               <template #addons>
                               <navigation />
                               <pagination />
                               </template>
                           </carousel>
                           <div class="" v-if="seen == false">
                               <carousel :items-to-show="5" v-if="export_new">
                               <slide  v-for="prod in products.new" :key="prod.id">
                               <div class=" product p-2">
                               <div class="discount-tag d-none">
                                -48%
                               </div>
                               <div class="options-pannel2">
                           <ul>
                               <li class="d-lg-block d-md-block d-none" title="compare">
                                   <a href="#" class="compare" @click.prevent="addToCompareList(prod)">
                                       <i class="fas fa-random"></i>
                                   </a>
                               </li>
                               <li title="Quick View" class="d-lg-block d-md-block d-none">
                                   <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(prod.id)">
                                       <i class="fas fa-search"></i>
                                   </a>
                               </li>
                               <li title="Add To Wishlist">
                                   <a href="#" class="compare" @click.prevent="AddToWishList(prod)">
                                       <i class="far fa-heart"></i>
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div class="images">
                           <router-link :to="'/product-details?id='+ prod.id">
                               <img :src="prod.image_url" @error="prod.image_url='assets/images/products/default-image.jpg'" alt="Image" class="main-image" /> 
                           </router-link>
                       </div>
                       
                       <div class="product-details text-center pt-2">
                           
                           <div class="product_name">
                               <router-link :to="'/product-details?id='+ prod.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{prod.product}}
                               </router-link>
                           </div>
                           <div class="price">
                               <del class="text-muted">{{prod.variation.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{prod.variation.default_sell_price}}৳</span>
                           </div>
                           <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" @click.prevent="AddToCart(prod)">
                               <div class="button m-auto text-light">
                                   <p><b>
                                       BUY NOW
                                   </b></p>
                                   <span>
                                       <i class="fas fa-shopping-cart"></i>
                                   </span>
                               
                           </div>
                           </a>
                           </div>
                               </div>  
                               </slide>

                               <template #addons>
                               <navigation />
                               <pagination />
                               </template>
                           </carousel>
            
                         
                           </div>
                       </div>
                       </div>
                    </div>
                </div>
            </div>
            <!--Quickview Modal-->
            <quickView :product="product_info"></quickView>
        </section>
        <!-- Export Quality section end  -->
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import mixins from '../Mixins';
import quickView from './layouts/QuickViewModal';
import loading from './layouts/LoadingComp';
export default {
    components: {
        quickView,
        loading,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    mixins: [mixins],
    data(){
        return {
            products: [],
            product_info: {},
            seen: true,
            export_hot:true,
            export_new:false,
            hot: 'active',
            newClass: '',
        }
    },
    methods: {
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res;
            })
        },
        exportHot(){
            this.export_hot = true;
            this.export_new = false;
            this.hot = 'active';
            this.newClass = '';
        }, 
        exportNew(){
            this.export_hot = false;
            this.export_new = true;
            this.hot = '';
            this.newClass = 'active';
        },
    },
    mounted(){
        
        this.$store.dispatch("ExportQuality")
        .then(res=>{
            this.products = res;
            this.seen = false;
        })
    }
}
</script>
<style>
    
</style>