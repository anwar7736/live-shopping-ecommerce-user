<template>
                <!-- Modal -->
<div class="modal fade" id="buy-to-cart" data-bs-backdrop="dynamic" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Cart</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="cart-items">
            <div class="mt-2" v-if="cartItems.length < 1">
                <center>
                    <h6 class="text-danger"><i class="fa fa-shopping-cart"></i> Your cart is empty!</h6>
                </center>
            </div>
            <div class="cart-item cart1 d-flex justify-content-between" v-for="item in cartItems" :key="item.id">
                <img src="assets/images/products/1.jpg" alt="Product Image" width="80">
                <div class="align-item-center ps-3 quantity-buy" >
                    <p><b>
                        {{item.product}}
                    </b></p>
                    <div class="quantity">
                        <button class="cart-qty-minus btn" id="dec" type="button" value="-" @click="decreaseQty(item.id)">-</button>
                        <input type="text" name="qty" id="qty" minlength="1" v-model="item.quantity" readonly class="input-text qty" />
                        <button class="cart-qty-plus btn" type="button" id="inc" value="+" @click="increaseQty(item.id)">+</button>
                        
                    </div>
                </div>
                <p class="price text-end">
                    <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{item.sell_price_inc_tax}}৳</span>
                    <br><del class="text-muted">{{item.default_sell_price}}৳</del> <br>
                    <button class="btn"><i class="fas fa-trash-alt" @click="removeItem(item.id)"></i></button>
                </p>
            </div>
        </div>
        <hr>
        <form @submit.prevent="checkout" class="cart-form" v-if="cartItems.length > 0">
            <div class="mb-3 col-12">
                <label for="name">Your Name <sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="name" name="name" v-model="customer.name" required>
            </div>
            <div class="mb-3 col-12">
                <label for="phone">Your Phone <sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="phone" name="phone" v-model="customer.phone" required>
            </div>
            <div class="mb-3 col-12">
                <label for="address">Your Address <sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="address" name="address" v-model="customer.address" required>
            </div>
            <button>Place Order <span><i class="fas fa-arrow-right"></i></span></button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import toastr from 'toastr';
import mixins from '../../Mixins';
export default {
    data()
    {
        return{
            customer:{
                name: '',
                phone: '',
                address: '',
            },
        }
    },
    mixins: [mixins],
    props: ['cartItems'],
    methods: {
        checkout()
        {
            this.$store.dispatch("Checkout", this.customer)
            .then((res)=>{
                console.log(res);
                this.customer = {
                name: '',
                phone: '',
                address: '',
            };
            toastr.success('Your order has been placed successfully!');
            })
            .catch(err=>{
                console.log(err);
            })
           
        }

    },
}
</script>
<style>
    
</style>