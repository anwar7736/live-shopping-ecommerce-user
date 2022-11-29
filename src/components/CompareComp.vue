<template lang="">
    <div>
        <link rel="stylesheet" href="assets/css/compare.css">

<section>
    <div class="container mt-5 mb-5">
        <h4><b>Compare Products</b></h4>
        <div v-if="compareItems.length < 1">
            <center>
                <h5 class="text-danger"><i class="fa fa-random"></i> No Item found in your compare list</h5>
                <router-link to="/shop" class="btn text-light mt-3" style="background-color:#ed6c00;">
                    RETURN TO SHOP
                </router-link>
            </center>
        </div>
        <div class="row compare-row">
            <div class="col-lg-6 col-md-6 compare-item" v-for="item in compareItems" :key="item.id">
                <div class="text-center m-2">
                    <button class="text-center btn btn-sm" @click="removeCompareItem(item.id)"><i class="fas fa-times"></i> Remove</button>
                </div>
                <router-link :to="'/product-details?id='+ item.id" class="text-decoration-none">
                    <img :src="item.image_url" @error="item.image_url='assets/images/products/default-image.jpg'" alt="Image"/> 
                    <div class="nav-link text-dark p-1">
                        <b>{{item.product}}</b>
                    </div>
                </router-link>
                    <div class="price">
                        <del class="text-muted">{{item.variation.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{item.variation.default_sell_price}}৳</span>
                    </div>
                    <div class="quantity-buy p-1 ps-0">
                        
                        <button data-bs-toggle="modal" data-bs-target="#buy-to-cart" class="btn" @click="AddToCart(item)">Buy</button>
                    </div>
                    <p v-html="item.description"></p>
                    <p>Contact us at any time:</p>
                    <p>+8801 403 111 999</p>
                    <p>SKU: {{item.sku}}</p>
                    <p v-if="item.enable_stock == 1">In Stock</p>
                    <p v-else class="text-danger">Out of Stock</p>
            </div>
        </div>
        
    </div>
</section>
   <!-- Checkout modal  -->
   <checkout :cartItems="cartItems"></checkout>
    </div>
</template>
<script>
import mixins from '../Mixins';
import checkout from './layouts/CheckoutModal';
export default {
    mixins: [mixins],
    computed: {
        compareItems()
        {
            return this.$store.getters.Get_Compare_Items;
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
    components: {
        checkout
    },
}
</script>
<style lang="">
    
</style>