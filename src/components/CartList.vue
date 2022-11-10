<template lang="">
    <div>
        <section>
            <link rel="stylesheet" href="assets/css/cart.css">
            <div class="container-fluid mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-12 cart-items">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="border border-dark border-end-0 border-top-0 border-start-0">
                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">&nbsp;</th>
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
                                                </center>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="border border-muted border-end-0 border-top-0 border-start-0" v-for="item in cartItems" :key="item.id">
                                        <td>
                                                <div class="remove">
                                                    <button class="btn" @click="removeItem(item.id)">
                                                        <i class="fas fa-times"></i>
                                                    </button>
                                                </div>
                                        </td>
                                        <td>
                                            <div class="thambnail">
                                                <img src="assets/images/products/1.jpg" alt="" width="80">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="product-name">
                                                <router-link to="/product-details" class="text-decoration-none text-dark">
                                                    {{item.product}}
                                                </router-link>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="product-price" data-title="Price">
                                                <p class="text-muted"><del>{{item.sell_price_inc_tax}}৳</del> <span>{{item.default_sell_price}}৳</span></p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="cart-quantiy" data-title="Quantity">
                                                <div class="quantity-buy">
                                                    <div class="quantity">
                                                        <button class="cart-qty-minus" id="dec" type="button" value="-" @click="decreaseQty(item.id)">-</button>
                                                        <input type="text" name="qty" id="qty" maxlength="12" v-model="item.quantity" readonly class="input-text qty" style="margin:4px;"/>
                                                        <button class="cart-qty-plus" type="button" id="inc" value="+" @click="increaseQty(item.id)">+</button>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="subtotal" title="subtotal">
                                                <p class="main-color">
                                                    {{item.quantity * item.default_sell_price}}৳
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
                                        <tr v-for="item in cartItems" :key="item.id">
                                            <td>{{item.product}}  × {{item.quantity}}</td>
                                            <td class="text-end"> {{item.quantity * item.default_sell_price}}৳</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" class="btn text-center d-block">
                                    <button class="text-cap" data-bs-toggle="modal" data-bs-target="#buy-to-cart">Proceed to Checkout <span><i class="fas fa-arrow-right"></i></span></button>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <checkout :cartItems="cartItems"></checkout>
    </div>
</template>
<script>
// import toastr from 'toastr';
import mixins from '../Mixins';
import checkout from './layouts/CheckoutModal';

export default {
    mixins: [mixins],
    components: {
        checkout
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