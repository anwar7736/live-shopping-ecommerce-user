<template>
    <div>
                <!-- Best Deal section start  -->
            <section>
            <div class="container-fluid mt-5">
                <div class="best-deal global-cat-sec">
                    <div class="section-cat-title">
                        <h2>Best Deal</h2>
                    </div>
                    <div class="row global-cat-row mt-5">
                        <div class="col-lg-3 col-md-12 col-12 global-single-col">
                                <div class="global-single-item" >
                                    <div class="global-single-sec-text col-lg-7 col-md-12">
                                        <h2>
                                            Best Price Best Offer
                                        </h2>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="img" style="background-image: url(assets/images/categories-img/BEST-DEALS-300x450.jpg);">

                                    </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 global-carousel-owl-col">
                            
                            <ul class="nav nav-tabs mt-4" id="myTab2" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="best-hot-tab" data-bs-toggle="tab" data-bs-target="#best_hot" type="button" role="tab" aria-controls="home" aria-selected="true">HOT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="best-new-tab" data-bs-toggle="tab" data-bs-target="#best_new" type="button" role="tab" aria-controls="profile" aria-selected="false">NEW ARRIVAL</button>
                        </li>
                        </ul>
                        <div class="tab-content" id="myTab2Content">
                            <div class="tab-pane fade show active" id="best_hot" role="tabpanel" aria-labelledby="best-hot-tab">
                               <div class="row row deal-day-row">
                                <div class="col-lg-3 col-md-4 col-6 product p-2" v-for="hot in products.hot" :key="hot.id">
                                <div class="discount-tag">
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
                                    <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(hot)">
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
                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">{{hot.product}}</a>
                            <div class="price">
                                <del class="text-muted">{{hot.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{hot.default_sell_price}}৳</span>
                            </div>
                            <a href="#" @click.prevent="AddToCart(hot)">
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
                               </div>
                            </div>
                            <div class="tab-pane fade row" id="best_new" role="tabpanel" aria-labelledby="best-new-tab">
                                <div class="row row deal-day-row">
                                    <div class="col-lg-3 col-md-4 col-6 product p-2" v-for="prod in products.new" :key="prod.id">
                                <div class="discount-tag">
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
                                    <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(prod)">
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
                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">{{prod.product}}</a>
                            <div class="price">
                                <del class="text-muted">{{prod.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{prod.default_sell_price}}৳</span>
                            </div>
                            <a href="#" @click.prevent="AddToCart(prod)">
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
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Quickview Modal-->
            <quickView :product="product_info"></quickView>
        </section>
        <!-- Best Deal section end  -->
    </div>
</template>
<script>
import mixins from '../Mixins';
import quickView from './layouts/QuickViewModal';
export default {
    components: {
        quickView,
    },
    mixins: [mixins],
    data(){
        return{
            products: [],
            product_info: {},
        }
    },
    methods: {
        productInfo(info)
        {
            this.product_info = info;
        },
    },
    created(){
        
        this.$store.dispatch("BestDeal")
        .then(res=>{
            this.products = res;
        })
        
    }
}
</script>
<style>
    
</style>