<template lang="">
    <div>
        <section>
            <link rel="stylesheet" href="assets/css/cart.css">
            <loading-view v-if="loading"/>
            <div class="container mt-5 mb-5" v-else>
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
                                            <div class="price" v-if="cart.item.regular_price > 0">
                                                <del class="text-muted">{{Number(cart.item.variation.default_sell_price).toFixed(2)}}৳
                                                </del>
                                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(cart.item.regular_price).toFixed(2)}}৳</span>
                                            </div>                            
                                            <div class="price" v-else>
                                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(cart.item.variation.default_sell_price).toFixed(2)}}৳</span>
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
                                            <div class="subtotal" title="subtotal" >
                                                <p class="main-color" v-if="cart.item.regular_price > 0">
                                                    {{cart.qty * Number(cart.item.regular_price).toFixed(2)}}৳
                                                </p> 
                                                <p class="main-color" v-else>
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
                                            <td v-if="cart.item.regular_price > 0" class="text-end"> {{cart.qty * Number(cart.item.regular_price).toFixed(2)}}৳</td>                                        
                                            <td v-else class="text-end"> {{cart.qty * Number(cart.item.variation.default_sell_price).toFixed(2)}}৳</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" class="btn text-center d-block">
                                    <button @click="show = true" class="text-cap">Proceed to Checkout <span><i class="fas fa-arrow-right"></i></span></button>
                                </a>
    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <checkout-view v-model="show"/>
        <!--checkout logo -->
    </div>
</template>
<script>
// import toastr from 'toastr';
import mixins from '../Mixins';
export default {
    mixins: [mixins],
    components: {

    },
    data(){
        return {
           item: {
            qty: '',
           },
           show: false,
           loading:true,
        }
    },
    computed: {
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        },500);
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