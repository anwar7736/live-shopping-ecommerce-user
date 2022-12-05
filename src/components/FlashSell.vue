<template lang="">
    <div>
        <section>
            <div class="container mt-5 mb-5">
                <loading v-if="seen"/>
                <div class="row deal-day-row" v-if="seen == false">
                    <div class="col-lg-3 col-md-4 col-6 product p-2" v-for="sale in flashSell" :key="sale.id">
                        <div class="discount-tag d-none">
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
                                    <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(sale.id)">
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
                            
                            <div class="product_name">
                                <router-link :to="'/product-details?id='+ sale.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{sale.product}}
                                </router-link>
                            </div>
                            <div class="price">
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(sale.variation.default_sell_price).toFixed(2)}}৳</span>
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
                        </div>
                    </div>               
                 </div>
            </div>
        </section>
        
        <!--Quickview Modal-->
        <quickView :product="product_info" :variations="variations"></quickView>
        <!-- Checkout modal  -->
        <checkout :cartItems="cartItems"></checkout>       
    </div>
</template>
<script>
import mixins from '../Mixins';
import quickView from './layouts/QuickViewModal';
import checkout from './layouts/CheckoutModal';
import loading from './layouts/LoadingComp';
export default {
    mixins: [mixins],
    data(){
        return{
            flashSell: {},
            product_info : {},
            variations : {},
            seen: true,
        }
    },
    methods: {
        productInfo(id)
        {
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
                
            })
        }
    },
    computed: {
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },
    components: {
        quickView,
        checkout,
        loading,
    },
    created()
    {
        this.$store.dispatch("FlashSell")
        .then(res=>{
            this.flashSell = res;
            this.seen = false;
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