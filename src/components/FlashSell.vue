<template lang="">
    <div>
        <section>
            <div class="container mt-5 mb-5">
                <div class="row deal-day-row">
                    <div class="col-lg-3 col-md-4 col-6 product p-2" v-for="sale in flashSell" :key="sale.id">
                        <div class="discount-tag">
                            -48%
                        </div>
                        <div class="options-pannel2">
                            <ul>
                                <li class="d-lg-block d-md-block d-none" title="compare">
                                    <a href="#" class="compare" @click.prevent="addToCompareList(sale)">
                                        <i class="fas fa-random"></i>
                                    </a>
                                </li>
                                <li title="Quick View" class="d-lg-block d-md-block d-none">
                                    <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(sale)">
                                        <i class="fas fa-search"></i>
                                    </a>
                                </li>
                                <li title="Add To Wishlist">
                                    <a href="#" class="compare" @click.prevent="AddToWishList(sale)">
                                        <i class="far fa-heart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="images">
                            <router-link :to="'/product-details?id='+ sale.id">
                                <img :src="sale.image_url" @error="sale.image_url='assets/images/products/default-image.jpg'" alt="Image" class="main-image" /> 
                            </router-link>
                        </div>
                        
                        <div class="product-details text-center pt-2">
                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">{{sale.product}}</a>
                            <div class="price">
                                <del class="text-muted">{{sale.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{sale.default_sell_price}}৳</span>
                            </div>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" @click.prevent="AddToCart(sale)">
                                <div class="button m-auto text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                            </div>
                            </a>

                            <!--Quickview Modal-->
                            <quickView :product="product_info"></quickView>
                        </div>
                    </div>               
                 </div>
            </div>
        </section>
    </div>
</template>
<script>
import mixins from '../Mixins';
import quickView from './layouts/QuickViewModal';
export default {
    mixins: [mixins],
    data(){
        return{
            flashSell: {},
            product_info : {},
        }
    },
    methods: {
        productInfo(info)
        {
            this.product_info = info;
        }
    },
    components: {
        quickView,
    },
    created()
    {
        this.$store.dispatch("FlashSell")
        .then(res=>{
            this.flashSell = res;
        })
    }
}
</script>
<style scoped>
    .deal-day-row{
        border-left: 0;
    }
    .deal-day-row .product{
        border-right: 0 !important;
        border-bottom: 0 !important;
        border-top: 0 !important;
        height: auto !important;
    }
</style>