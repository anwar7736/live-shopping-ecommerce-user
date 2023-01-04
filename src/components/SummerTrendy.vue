<template>
    <div>
                <!-- SUMMER TRENDY section start  -->
                <section>
            <div class="container">
                <div class="summery-trendy global-cat-sec">
                    <div class="section-cat-title">
                        <h2>Summer Trendy</h2>
                    </div>
                    <div class="row global-cat-row mt-5">
                        <div class="col-lg-3 col-md-12 col-12 global-single-col">
                                <div class="global-single-item" >
                                    <div class="global-single-sec-text col-lg-7 col-md-12">
                                        <h2>
                                            {{image.title}}
                                        </h2>
                                        <router-link to="/shop">Read More</router-link>
                                    </div>
                                    <div class="img" :style="{ 'background-image': 'url(' + image.image + ')' }">

                                    </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 global-carousel-owl-col">
                           
                            <div class="owl-tab-type d-flex tabs">
                                <div class="btn" :class="{active:hot}" @click="summerHot">
                                    <i class="fas fa-fire"></i> HOT
                                </div>
                                <div class="btn" :class="{active:newClass}" @click="summerNew">
                                    <i class="fas fa-fire"></i>  NEW ARRIVAL
                                </div>
                            </div>
                  
                            <loading v-if="seen"/>
                               <div class="row row deal-day-row" v-if="seen == false">
                                <carousel :items-to-show="5" v-if="summer_hot">
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
                                <router-link :to="'/product-details?id='+ hot.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{hot.product ?? hot.default_name}}
                                </router-link>
                            </div>
                            <div class="price">
                                <del class="text-muted">{{Number(hot.variation.default_sell_price).toFixed(2)}}৳
                                </del>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(hot.variation.sell_price_inc_tax).toFixed(2)}}৳</span>
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
                                <carousel :items-to-show="5" v-if="summer_new">
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
                                <router-link :to="'/product-details?id='+ prod.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{prod.product ?? prod.default_name}}
                                </router-link>
                            </div>
                            <div class="price">
                                <del class="text-muted">{{Number(product.variation.default_sell_price).toFixed(2)}}৳
                                </del>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(prod.variation.sell_price_inc_tax).toFixed(2)}}৳</span>
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
            <quickView :product="product_info" :variations="variations"></quickView>
        </section>
        <!-- SUMMER TRENDY section end  -->
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
            image: {},
            product_info: {},
            variations: {},
            seen: true,
            summer_hot:true,
            summer_new:false,
            hot: 'active',
            newClass: '',
        }
    },
    methods: {
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
            })
        },
        summerHot(){
            this.summer_hot = true;
            this.summer_new = false;
            this.hot = 'active';
            this.newClass = '';
        }, 
        summerNew(){
            this.summer_hot = false;
            this.summer_new = true;
            this.hot = '';
            this.newClass = 'active';
        },
    },
    created(){
        this.$store.dispatch("Category_Image", "SUMMER")
        .then(res=>{
            this.image = res;
            this.seen = false;
            
        });       
         
        this.$store.dispatch("SummerTrendy")
        .then(res=>{
            this.products = res;
            this.seen = false;
            
        });
    },
}
</script>
<style>

</style>