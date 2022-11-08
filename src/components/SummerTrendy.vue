<template>
    <div>
                <!-- SUMMER TRENDY section start  -->
                <section>
            <div class="container-fluid">
                <div class="summery-trendy global-cat-sec">
                    <div class="section-cat-title">
                        <h2>Summer Trendy</h2>
                    </div>
                    <div class="row global-cat-row mt-5">
                        <div class="col-lg-3 col-md-12 col-12 global-single-col">
                                <div class="global-single-item" >
                                    <div class="global-single-sec-text col-lg-7 col-md-12">
                                        <h2>
                                            Discount On Summer Collection
                                        </h2>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="img" style="background-image: url(assets/images/categories-img/Summer-Trendy-300x450.jpg);">

                                    </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 global-carousel-owl-col">
                            
                            <div class="owl-tab-type d-flex tabs">
                                <div class="btn active" id="tab1" >
                                    <i class="fas fa-fire"></i> Hot
                                </div>
                                <div class="btn" id="tab2" >
                                    NEW ARRIVAL
                                </div>
                            </div>                              
                            <div class="tab-container" id="tab1con" >
                                    <div class="owl-carousel cat-carousel product-items">
                                        <div class="product p-2" v-for="hot in products.hot" :key="hot.id">
                                            <div class="discount-tag">
                                                -48%
                                            </div>
                                            <div class="images">
                                                <router-link to="/product-details">
                                                    <img src="assets/images/products/1.jpg" alt="Image" class="main-image">
                                                </router-link>
                                            </div>
                                            <div class="options-pannel">
                                                <ul>
                                                    <li class="d-lg-block d-md-block d-none" title="Compare">
                                                        <a href="#" class="compare" @click.prevent="addToCompareList(hot)">
                                                            <i class="fas fa-random"></i>
                                                        </a>
                                                    </li>
                                                    <li class="d-lg-block d-md-block d-none" title="Quick View">
                                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal">
                                                            <i class="fas fa-search"></i>
                                                        </a>
                                                    </li>
                                                    <li title="Add To Wishlist">
                                                        <a href="#" class="compare">
                                                            <i class="far fa-heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
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
                            <div class="tab-container" id="tab2con">
                                    <div class="owl-carousel cat-carousel product-items">
                                        <div class="product p-2" v-for="prod in products.new" :key="prod.id">
                                            <div class="discount-tag">
                                                -48%
                                            </div>
                                            <div class="images">
                                                <router-link to="/product-details">
                                                    <img src="assets/images/products/1.jpg" alt="Image" class="main-image">
                                                </router-link>
                                            </div>
                                            <div class="options-pannel">
                                                <ul>
                                                    <li class="d-lg-block d-md-block d-none" title="Compare">
                                                        <a href="#" class="compare" @click.prevent="addToCompareList(prod)">
                                                            <i class="fas fa-random"></i>
                                                        </a>
                                                    </li>
                                                    <li class="d-lg-block d-md-block d-none" title="Quick View">
                                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal">
                                                            <i class="fas fa-search"></i>
                                                        </a>
                                                    </li>
                                                    <li title="Add To Wishlist">
                                                        <a href="#" class="compare">
                                                            <i class="far fa-heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
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
        </section>
        <!-- SUMMER TRENDY section end  -->
    </div>
</template>
<script>
import mixins from '../Mixins';
export default {  
    mixins: [mixins],
    data(){
        return {
            products: [],
        }
    },
    methods: {

    },
    created(){
        this.$store.dispatch("SummerTrendy")
        .then(res=>{
            this.products = res;
            
        })
    }
}
</script>
<style>
    
</style>