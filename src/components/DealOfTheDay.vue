<template>
    <div>
              <!-- All Products Grid Section start  -->
              <section>
            <div class="container">
                <div class="liner-continer">
                    <h4 class="title">DEALS OF THE DAY</h4> 
                </div>
                <loading v-if="seen"/>
                <div class="all-products" v-if="seen == false">
                    <div class="row deal-day-row">
                        <div class="col-lg-2 col-md-3 col-6 product p-2" v-for="product in products" :key="product.id">
                            <div class="discount-tag d-none">
                                -48%
                            </div>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" @click.prevent="addToCompareList(product)">
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(product.id)">
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li title="Add To Wishlist">
                                        <a href="#" class="compare" @click.prevent="AddToWishList(product)">
                                            <i class="far fa-heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="images">
                                <router-link :to="'/product-details?id='+ product.id">
                                    <img :src="product.image_url" @error="product.image_url='assets/images/products/default-image.jpg'" alt="Image" class="main-image" /> 
                                  </router-link>
                            </div>
                            
                            <div class="product-details text-center pt-2">
                               
                                <div class="product_name">
                                    <router-link :to="'/product-details?id='+ product.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{product.product}}
                                    </router-link>
                                </div>
                                <div class="price">
                                    <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.sell_price_inc_tax).toFixed(2)}}৳</span>
                                </div>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" @click.prevent="AddToCart(product)">
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
        <!--Quickview Modal-->
        <quickView :product="product_info" :variations="variations"></quickView>
        </section>
        <!-- All Products Grid Section end  -->
    </div>
</template>
<script>
import mixins from '../Mixins';
import quickView from './layouts/QuickViewModal';
import loading from './layouts/LoadingComp';
export default {
    mixins: [mixins],
    components: {
        quickView,
        loading
    },
    data(){
        return{
            products: [],
            product_info : {},
            variations : {},
            seen: true,
        }
    },
    methods: {
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
                console.log(res);
            })
        },
    },
    created(){
        this.$store.dispatch("DealsOfTheDay")
        .then(res=>{
            this.products = res;
            this.seen = false;
           
        })
    }
}
</script>
<style>
    
</style>