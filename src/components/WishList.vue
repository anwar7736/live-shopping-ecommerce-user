<template lang="">
    <div>
        <link rel="stylesheet" href="assets/css/dashboard.css">

<section>
    <loading-view v-if="loading"/>
    <div class="container-fluid mt-4" v-else>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-10 account-menu p-3 d-md-block d-lg-block" id="account-sidemenu">
                <div class="col-12 dismiss-box">
                    <button class="dismiss btn btn-light d-md-none d-lg-none d-block" id="account-dismiss">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="menu-box-inner d-none">
                    <div class="profile-details">
                        <div class="profile-image m-2">
                            <img src="assets/images/products/1.jpg" alt="">
                        </div>
                        <p class="name mt-2 text-muted">
                            <b>
                                Sontos Sharma
                            </b>
                        </p>
                    </div>
                <div class="d-flex justify-content-between">
                    <h5 class="title">My Account</h5>
                    
                </div>
                <hr>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/dashboard" class="nav-link"><b>Dashboard</b></router-link></li>
                    <li class="nav-item"><router-link to="my-account" class="nav-link"><b>My Profile</b></router-link></li>
                    <li class="nav-item"><router-link to="/orders" class="nav-link"><b>Orders</b></router-link></li>
                    <li class="nav-item"><router-link to="/wishlist" class="nav-link"><b>Wishlist</b></router-link></li>
                    <li class="nav-item"><router-link to="#" class="nav-link"><b>Logout</b></router-link></li>
                </ul>
                </div>
            </div>
            <div class="col-lg-9 col-md-8 col-12 p-3 text-muted menu-details">
                <button class="d-block d-md-none d-lg-none btn btn-secondary sidebar" id="account-sidebar">
                    <i class="fas fa-arrow-right d-none"></i>
                </button>
                <h3 class="title"><b>My Wishlist Products</b></h3>
                <div class="row deal-day-row">
                    <div v-if="wishlistItems.length < 1" class="mt-5">
                        <center>
                            <h4 class="text-danger"><i class="fa fa-heart"></i> Your wishlist is empty!
                            </h4>
                            <router-link to="/shop" class="btn text-light mt-3" style="background-color:#ed6c00;">
                                RETURN TO SHOP
                            </router-link>
                        </center>
                    </div>
                    <div class="col-lg-12 col-md-6 col-12 product wishlist-product p-2 d-lg-flex"  v-for="item in wishlistItems" :key="item.id">
                        <div class="discount-tag" v-if="item.regular_price > 0 && calculateDiscount(item) > 0">
                            <span>
                            - {{calculateDiscount(item)}}%
                            </span>
                        </div> 
                        
                        <div class="images">
                            <router-link :to="'/product-details?id='+ item.id">
                                <img :src="item.image_url" @error="item.image_url='assets/images/products/default-image.jpg'" alt="Image" class="main-image" /> 
                                    </router-link>
                            <div class="options-pannel2 d-lg-block d-md-block d-none" style="height: 6rem;">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare" @click.prevent="addToCompareList(item)">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random" :class="{'text-warning': isCompareListItem(item)}"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare"  @click.prevent="productInfo(item.id)" >
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product-details text-start pt-2 ps-4">
    
                            <router-link :to="'/product-details?id='+ item.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{item.product ?? item.default_name}}
                            </router-link>
                           <div class="price" v-if="item.regular_price > 0">
                                <del class="text-muted">{{ Number(item.variation.default_sell_price).toFixed(2)}}৳
                                </del>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(item.regular_price).toFixed(2)}}৳</span>
                            </div>                            
                            <div class="price" v-else>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(item.variation.default_sell_price).toFixed(2)}}৳</span>
                            </div>
                            <p class="product-details-p" v-html="item.description">
                            </p>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" @click.prevent="AddToCart(item), show = true">
                                <div class="button text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                                </div>
                            </a>
                            <button @click="removeWishlistItem(item.id)" class="btn btn-sm m-2"><i class="fas fa-times"></i> Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Quickview Modal-->
            <quick-view :product="product_info" :variations="variations"/>
        </div>
    </div>
</section>
   <!-- Checkout modal  -->
   <checkout-view v-model="show"/>
   <quick-view v-model="show" :product="product_info" :variations="variations"/>
</div>
</template>
<script>
import mixins from '../Mixins';

export default {
    data(){
        return {
            product_info : {},
            variations : {},
            show:false,
            loading: true,
        }
    },
    components: {

    },
    mixins: [mixins],
    computed: {
        wishlistItems()
        {
            return this.$store.getters.Get_Wishlist_Items;
        },
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },
    methods: {
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
                this.show = true;
            })
        },
       
    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        },500);
    }
}
</script>
<style>
    .deal-day-row{
        max-height: 100vh;
        overflow-y: auto;
    }
    .deal-day-row::-webkit-scrollbar{
        background-color: transparent;
        width: 0;
    }
</style>