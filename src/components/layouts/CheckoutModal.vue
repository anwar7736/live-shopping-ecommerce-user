<template>
                <!-- Modal -->
<!-- <div class="modal fade" id="buy-to-cart" data-bs-backdrop="dynamic" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
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
            <div class="cart-item cart1 d-flex justify-content-between" v-for="item in cartItems" :key="item.item.id">
                <img class="mb-2" :src="item.item.image_url" @error="item.item.image_url='assets/images/products/default-image.jpg'" alt="Image" width="70" height="80"/>
                <div class="align-item-center ps-3 quantity-buy" >
                    <p><b>
                        {{item.item.product ?? item.item.default_name}}
                    </b></p>
                    <div class="quantity">
                        <button class="cart-qty-minus btn" id="dec" type="button" value="-" @click="decreaseQty(item.item.id)">-</button>
                        <input type="text" min="1" name="qty" id="qty" v-model="item.qty" @blur="updateQty(item)" class="input-text qty"/>
                        <button class="cart-qty-plus btn" type="button" id="inc" value="+" @click="increaseQty(item.item.id)">+</button>
                        
                    </div>
                    <strong class="text-sm" v-if="item.item.type === 'variable'">
                            <span>Variations:</span>
                            <div class="d-flex justify-content-between" v-if="item.variations">
                                <div class="" v-for="v in item.variations" :key="v.id">
                                    <label><input type="radio" @click="changeSize(item.item.id, v.id)" :value="v.id" class="size" :checked="v.id === item.size" /> {{v.name}}</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between" v-if="item.item.variations">
                                <div class="" v-for="v in item.item.variations" :key="v.id">
                                    <label><input type="radio" @click="changeSize(item.item.id, v.id)" :value="v.id" class="size" :checked="v.id === item.size" /> {{v.name}}</label>
                                </div>
                            </div>

                </strong>
                <div class="text-danger" v-if="errors.some(e=>e.id === item.item.id)">
                    <div v-for="error in errors.filter(err=> err.id === item.item.id)" :key="error">
                        <h6 v-if="error.size">{{error.size}}</h6>
                        <h6 v-if="error.qty">{{error.qty}}</h6>
                    </div>
                </div>
                </div>
                <div class="price" v-if="item.item.regular_price > 0">
                    <del class="text-muted">{{ Number(item.item.variation.default_sell_price).toFixed(2)}}৳
                    </del>
                    <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(item.item.regular_price).toFixed(2)}}৳</span>
                </div>                            
                <div class="price" v-else>
                    <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(item.item.variation.default_sell_price).toFixed(2)}}৳</span>
                </div>
                    <button class="btn"><i class="fas fa-trash-alt" @click="removeItem(item.item.id)"></i></button>
                    
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
            <button :disabled="isDisabled">{{btnText}}<span><i class="fas fa-arrow-right"></i></span></button>
        </form>
      </div>
    </div>
  </div>
</div> -->
<teleport to="body">
    <transition name="fade">
      <div class="the-modal" v-show="modelValue">
        <transition name="zoom">
          <div class="the-modal__container" v-show="modelValue">
            <div class="the-modal__header d-flex jc-between ai-center">
              <div class="p-2 pl-3">
                
              </div>
              <div align="right">
                <div class="the-modal__close" @click="$emit('update:modelValue', false)" title="Close">X</div>
              </div>
            </div>

            <div class="the-modal__body">
                <div class="cart-items">
                <div class="mt-2" v-if="cartItems.length < 1">
                    <center>
                        <h6 class="text-danger"><i class="fa fa-shopping-cart"></i> Your cart is empty!</h6>
                    </center>
                </div>
                <div class="cart-item cart1 d-flex justify-content-between" v-for="item in cartItems" :key="item.item.id">
                    <img class="mb-2" :src="item.item.image_url" @error="item.item.image_url='assets/images/products/default-image.jpg'" alt="Image" width="70" height="80"/>
                    <div class="align-item-center ps-3 quantity-buy" >
                        <p><b>
                            {{item.item.product ?? item.item.default_name}}
                        </b></p>
                        <div class="quantity">
                            <button class="cart-qty-minus btn" id="dec" type="button" value="-" @click="decreaseQty(item.item.id)">-</button>
                            <input type="text" min="1" name="qty" id="qty" v-model="item.qty" @blur="updateQty(item)" class="input-text qty"/>
                            <button class="cart-qty-plus btn" type="button" id="inc" value="+" @click="increaseQty(item.item.id)">+</button>
                            
                        </div>
                        <strong class="text-sm" v-if="item.item.type === 'variable'">
                                <span>Variations:</span>
                                <div class="d-flex justify-content-between" v-if="item.variations">
                                    <div class="" v-for="v in item.variations" :key="v.id">
                                        <label><input type="radio" @click="changeSize(item.item.id, v.id)" :value="v.id" class="size" :checked="v.id === item.size" /> {{v.name}}</label>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between" v-if="item.item.variations">
                                    <div class="" v-for="v in item.item.variations" :key="v.id">
                                        <label><input type="radio" @click="changeSize(item.item.id, v.id)" :value="v.id" class="size" :checked="v.id === item.size" /> {{v.name}}</label>
                                    </div>
                                </div>

                    </strong>
                    <div class="text-danger" v-if="errors.some(e=>e.id === item.item.id)">
                        <div v-for="error in errors.filter(err=> err.id === item.item.id)" :key="error">
                            <h6 v-if="error.size">{{error.size}}</h6>
                            <h6 v-if="error.qty">{{error.qty}}</h6>
                        </div>
                    </div>
                    </div>
                    <div class="price" v-if="item.item.regular_price > 0">
                        <del class="text-muted">{{ Number(item.item.variation.default_sell_price).toFixed(2)}}৳
                        </del>
                        <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(item.item.regular_price).toFixed(2)}}৳</span>
                        <button class="btn remove2"><i class="fas fa-trash-alt" @click="removeItem(item.item.id)"></i></button>
                    </div>                            
                    <div class="price" v-else>
                        <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(item.item.variation.default_sell_price).toFixed(2)}}৳</span>
                        <button class="btn remove2"><i class="fas fa-trash-alt" @click="removeItem(item.item.id)"></i></button>
                    </div>
                    <button class="btn remove"><i class="fas fa-trash-alt" @click="removeItem(item.item.id)"></i></button>
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
                    <button :disabled="isDisabled">{{btnText}}<span><i class="fas fa-arrow-right"></i></span></button>
                </form>
                </div>
            </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
<script>
import toastr from 'toastr';
import mixins from '../../Mixins';
export default {
    data()
    {
        return{ 
            validatedArray: [],
            errors: [],
            isDisabled: false,
            btnText: 'Place Order',
            customer:{
                name: '',
                phone: '',
                address: '',
               
            },
        }
    },
    computed: {
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },
    props: {
         modelValue: {
            type: Boolean,
            default: false
        },
        // cartItems: {
        //     type: Object
            
        // }
    },
    mixins: [mixins],
    methods: {
        checkout()
        {
            this.cartItems.map(item=> {
                let product_id = item.item.id;
                let size = item.size;
                let qty = item.qty;
                let errors = this.errors;
                let errorIndex = errors.findIndex(e=> e.id === product_id);
                let index = this.validatedArray.findIndex(item=> item === product_id);
                if(item.item.type === 'variable')
                {
                    if(item.size === '')
                    {
                        if(errorIndex > -1)
                        {
                            errors[errorIndex]["size"] = 'Size is required';
                        }
                       else errors.push({id:product_id, size:'Size is required'});
                    }
                    else if(item.size !== ''){
                        errorIndex > -1 ? errors[errorIndex]["size"] = '' : '';
                        this.$store.dispatch("GetStockQty", {product_id, size})
                        .then(res=>{
                            if(res.qty < qty)
                            {
                                if(errorIndex > -1)
                                {
                                    errors[errorIndex]['qty'] = 'Stock ' + Math.round(res.qty)+ ' pcs available';
                                }

                                else errors.push({id:product_id,qty: 'Stock '+ Math.round(res.qty) +' pcs available'});

                                if(index > -1)
                                {
                                    this.validatedArray.splice(index, 1);
                                }
                            }
                            else{
                                errorIndex > -1 ? errors[errorIndex]["qty"] = '' : '';
                                let bool = this.validatedArray.some(item=> item === product_id);
                                if(!bool)
                                {
                                    this.validatedArray.push(product_id);
                                }

                                this.finalCheckout();
                            
                            }
                        })
                        .catch();
                    }
                }
                else {
                        this.$store.dispatch("GetStockQty", {product_id, size:''})
                        .then(res=>{
                            if(res.qty < qty)
                            {
                                if(errorIndex > -1)
                                {
                                    errors[errorIndex]['qty'] = 'Stock ' + Math.round(res.qty)+ ' pcs available';
                                }

                                else errors.push({id:product_id,qty: 'Stock '+ Math.round(res.qty) +' pcs available'});

                                if(index > -1)
                                {
                                    this.validatedArray.splice(index, 1);
                                }
                            }
                            else{
                                errorIndex > -1 ? errors[errorIndex]["qty"] = '' : '';
                                let bool = this.validatedArray.some(item=> item === product_id);
                                if(!bool)
                                {
                                    this.validatedArray.push(product_id);
                                }

                                this.finalCheckout();
                            }
                        })
                        .catch();
                }
            });
           
        },
        finalCheckout()
        {
            let status = this.cartItems.every(item => this.validatedArray.includes(item.item.id));
            if(status)
            {
                this.isDisabled = true;
                this.btnText = 'Please Wait....';
                this.$store.dispatch("Checkout", this.customer)
                .then((res)=>{
                    console.log(res);
                    this.customer = {
                    name: '',
                    phone: '',
                    address: '',
                };
                if(res.success)
                {
                    this.btnText = 'Place Order';
                    toastr.success(res.success);
                    this.$emit('update:modelValue', false);
                }
                else if(res.error)
                {
                    this.isDisabled = false;
                    this.btnText = 'Place Order';
                    toastr.error(res.error);
                }
                })
                .catch(err=>{
                    this.isDisabled = false;
                    this.btnText = 'Place Order';
                    console.log(err);
                })
            }
           
           },

        changeSize(id, size)
        {
            this.$store.dispatch("UpdateSize", {id, size});
        }
    }
    }


</script>
<style scoped>
    .the-modal {
  position: fixed;
  padding-top: 40px;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}
.the-modal__container {
  width: 40%;
  max-height: 95vh;
  background-color: white;
  border-radius: 9px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  overflow-y: auto;
}
.the-modal__container--lg {
  width: 555px;

}
.the-modal__header {
  font-size: 22px;
  font-weight: bold;
  color: var(--brand-color);
}
.the-modal__close {
  cursor: pointer;
  padding: 3px 9px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: -10px;
  margin-top: 12px;
}
.the-modal__close:hover {
  color: red;
}
.the-modal__body {
  padding: 44px;
  padding-top: 22px;
}
.remove{
    display: block; 
}
.remove2{
    display: none; 
}

@media (max-width: 805px){
    .the-modal__container{
        width: 95%;
    }
    .the-modal__close{
        display: block;
    }
    .the-modal__body {
  padding: 10px;
}
.remove{
    display: none;
}
.remove2{
    display: block;
}
}
</style>