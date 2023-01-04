<template lang="">
    <div>
        <section>
            <link rel="stylesheet" href="assets/css/cart.css">
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-12 cart-items">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="border border-dark border-end-0 border-top-0 border-start-0">
                                    <tr>
                                        <th scope="col">Action</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="cartItems.length < 1">
                                        <td colspan="6">
                                            <div class="mt-5">
                                                <center>
                                                    <h4 class="text-danger"><i class="fa fa-shopping-cart"></i> No item found in your cart list</h4>
                                                    <router-link to="/shop" class="btn text-light mt-3" style="background-color:#ed6c00;">
                                                        RETURN TO SHOP
                                                    </router-link>
                                                </center>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="border border-muted border-end-0 border-top-0 border-start-0" v-for="cart in cartItems" :key="cart.item.id">
                                        <td>
                                                <div class="remove">
                                                    <button class="btn" @click="removeItem(cart.item.id)">
                                                        <i class="fas fa-times"></i>
                                                    </button>
                                                </div>
                                        </td>
                                        <td>
                                            <div class="thambnail">
                                               
                                                <img :src="cart.item.image_url" @error="cart.item.image_url='assets/images/products/default-image.jpg'" alt="Image" width="80" /> 
                                            </div>
                                        </td>
                                        <td>
                                            <div class="product-name">
                                                <router-link :to="'/product-details?id='+ cart.item.id" class="text-decoration-none text-dark">
                                                    {{cart.item.product ?? cart.item.default_name}}
                                                </router-link>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="product-price" data-title="Price">
                                                <p class="text-muted"><span>{{Number(cart.item.variation.default_sell_price).toFixed(2)}}৳</span></p>
                                            </div>
                                        </td>                                        
                                        <td>
                                        </td>
                                        <td>
                                            <div class="cart-quantiy" data-title="Quantity">
                                                <div class="quantity-buy">
                                                    <div class="quantity">
                                                        <button class="cart-qty-minus" id="dec" type="button" value="-" @click="decreaseQty(cart.item.id)">-</button>
                                                        <input type="text" min="1" name="qty" id="qty" v-model="cart.qty" @blur="updateQty(cart)" class="input-text qty" style="margin:4px;"/>
                                                        <button class="cart-qty-plus" type="button" id="inc" value="+" @click="increaseQty(cart.item.id)">+</button>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="subtotal" title="subtotal">
                                                <p class="main-color">
                                                    {{cart.qty * Number(cart.item.variation.default_sell_price).toFixed(2)}}৳
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 proceed-checkout">
                        <div class="border-bold card p-3">
                            <div class="text-center">
                                <h3><b>Your Cart</b></h3>   
                            </div>
                            <div class="table-responsive cart-form">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">PRODUCT</th>
                                            <th scope="col" class="text-end">SUB TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="cartItems.length < 1">
                                            <td colspan="6">
                                                <div class="mt-2">
                                                    <center>
                                                        <h6 class="text-danger"><i class="fa fa-shopping-cart"></i> Your cart is empty!</h6>
                                                    </center>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-for="cart in cartItems" :key="cart.item.id">
                                            <td>{{cart.item.product ?? cart.item.default_name}}  × {{cart.qty}}</td>
                                            <td class="text-end"> {{cart.qty * cart.item.variation.default_sell_price}}৳</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" class="btn text-center d-block">
                                    <button class="text-cap">Proceed to Checkout <span><i class="fas fa-arrow-right"></i></span></button>
                                </a>
    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--checkout modal -->
        <checkout :cartItems="cartItems"></checkout>
        <!--checkout logo -->
        <buy/> 
        
    </div>
</template>
<script>
// import toastr from 'toastr';
import mixins from '../Mixins';
import checkout from './layouts/CheckoutModal';
import buy from './layouts/BuyModal';
export default {
    mixins: [mixins],
    components: {
        checkout,
        buy
    },
    data(){
        return {
           item: {
            qty: '',
           }
        }
    },
    computed: {
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },

    methods: {
        // checkout()
        // {
        //     const auth = this.$store.getters.GET_AUTH_STATUS;
        //     if(!auth)
        //     {
        //         toastr.error('Your are not logged in');
        //         localStorage.setItem("redirect_path", "/cart-list");
        //         this.$router.push('/login-register');
        //     }
        //     if(this.$store.getters.Total_Cart_Items < 1)
        //     {
        //         toastr.error('No item found in your cart list');
        //     }
        // }

    }
}
</script>
<style lang="">
    
</style>