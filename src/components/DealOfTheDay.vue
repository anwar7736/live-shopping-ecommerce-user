<template>
    <div>
              <!-- All Products Grid Section start  -->
              <section>
            <div class="container-fluid">
                <div class="liner-continer">
                    <h4 class="title">DEALS OF THE DAY</h4> 
                </div>
                <div class="all-products">
                    <div class="row deal-day-row">
                        <div class="col-lg-2 col-md-3 col-6 product p-2" v-for="product in products" :key="product.id">
                            <div class="discount-tag">
                                -48%
                            </div>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" >
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
                            <div class="images">
                                <router-link to="/product-details">
                                    <img src="assets/images/products/1.jpg" alt="Image" class="main-image">
                                  </router-link>
                            </div>
                            
                            <div class="product-details text-center pt-2">
                                <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">{{product.product}}</a>
                                <div class="price">
                                    <del class="text-muted">{{product.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{product.default_sell_price}}৳</span>
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
        </section>
        <!-- All Products Grid Section end  -->
    </div>
</template>
<script>
export default {
    props: ['products'],
    methods: {
        AddToCart(item)
        {
            this.$store.dispatch("AddToCart", item);
        }
    },
}
</script>
<style>
    
</style>