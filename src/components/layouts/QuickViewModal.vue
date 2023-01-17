<template>
    <div>
                <!-- modal start
    <div class="modal fade " :class="{show:modelValue, 'd-block':modelValue}" id="product-modal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header border-0">
                <div class="d-flex justify-content-end position-absolute top-0 end-0 p-2">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('update:modelValue', false)"></button>
                </div>
            </div>
            <div class="modal-body product-popup">
                
                <div class="row" v-if="product">
                    <div class="modal-product-image col-6">
                        <div id="modal-product-image-inner" class="carousel slide" data-bs-ride="carousel"  data-bs-touch="true" data-bs-interval="50000">
                            <div class="carousel-inner" role="listbox">                               
                                <div class="carousel-item active" v-for="image in product.images" :key="image.id">
                                    <img :src="image.image" @error="image.image='assets/images/products/default-image.jpg'" alt="" class="col-12"/> 
                                </div>  
                                <div v-if="product.images == ''">
                                    <div v-if="product.image_url">
                                        <a href="#" class="carousel-item active">
                                            <img :src="product.image_url" alt="Image" class="w-100 d-block"/>
                                        </a>
                                        </div>
                                    <div v-else>
                                        <a href="#" class="carousel-item active">
                                            <img src="assets/images/products/default-image.jpg" alt="Image" class="col-12"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="carousel-item d-none">
                                </div>                           
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3 mt-1" v-for="image in product.images" :key="image.id">
                                        <img style="cursor:pointer" :src="image.image" alt="" height="60" width="60">
                                </div>                             
                                <div v-if="product.images == ''">
                                    <div v-if="product.image_url" class="col-md-3 mt-1">
                                        
                                            <img style="cursor:pointer" :src="product.image_url" alt="" height="60" width="60">
                                        
                                    </div>
                                    <div v-else class="col-md-3 mt-1">
                                        <img style="cursor:pointer" src="assets/images/products/default-image.jpg" alt="" height="60" width="60">
                                    </div> 
                                </div>                                                       
                                    <div class="col-md-3 mt-1 d-none">

                                    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#modal-product-image-inner" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#modal-product-image-inner" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <router-link :to="'/product-details?id='+ product.id" class="btn col-12 d-none">View Details</router-link>
                    </div>
                    <div class="modal-product-details col-6 pt-3" v-if="product.variation">
                        <a href="#" class="text-decoration-none text-dark">
                            
                            <h3>{{product.product ?? product.default_name}}</h3>
                        </a>
                        <h6 class="price pt-3">
                            <div class="price" v-if="product.regular_price > 0">
                                <del class="text-muted">{{ Number(product.variation.default_sell_price).toFixed(2)}}৳
                                </del>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.regular_price).toFixed(2)}}৳</span>
                            </div>                            
                            <div class="price" v-else>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.default_sell_price).toFixed(2)}}৳</span>
                            </div>
                        </h6>
                        <p class="text-sm" v-html="product.description">
                        </p>                        
                        <strong class="text-sm" v-if="product.type === 'variable'">
                            <span>Variations:</span>
                            <div class="d-flex justify-content-between">
                                <div class="" v-for="v in variations" :key="v.id">
                                    <label><input type="radio" :value="v.id" v-model="size" class="size"/> {{v.name}}</label>
                                </div>

                            </div>

                        </strong><br/>
                        <div class="quantity-buy d-flex">
                            <div class="quantity">
                                <button class="cart-qty-minus" type="button" value="-" @click="decreaseQty">-</button>
                                <input type="number" min="1" max="10" v-model="quantity" class="input-text qty" style="width:32% !important" @blur="updateQty({product, qty:quantity})"/>
                                <button class="cart-qty-plus" type="button" value="+" @click="increaseQty">+</button>
                                
                            </div>
                            <br/>
                            <button class="btn" @click="AddToCart(product, variations, 1, size, quantity)">Add To Cart</button>
                        </div>
                        <hr>
                        <p><b>SKU:</b> {{product.sku}}</p>
                        <p><b>Category: </b> {{product.category}}</p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div> -->
<!--modal end-->
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
                <div class="row" v-if="product">
                    <div class="modal-product-image col-6">
                        <div id="modal-product-image-inner" class="carousel slide" data-bs-ride="carousel"  data-bs-touch="true">
                            <div class="carousel-inner" role="listbox">                               
                                <div class="carousel-item active" v-for="image in product.images" :key="image.id">
                                    <img :src="image.image" @error="image.image='assets/images/products/default-image.jpg'" alt="" class="col-12"/> 
                                </div>  
                                <div v-if="product.images == ''">
                                    <div v-if="product.image_url">
                                        <a href="#" class="carousel-item active">
                                            <img :src="product.image_url" alt="Image" class="w-100 d-block"/>
                                        </a>
                                        </div>
                                    <div v-else>
                                        <a href="#" class="carousel-item active">
                                            <img src="assets/images/products/default-image.jpg" alt="Image" class="col-12"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="carousel-item d-none">
                                </div>                           
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3 mt-1" v-for="image in product.images" :key="image.id">
                                        <img style="cursor:pointer" :src="image.image" alt="" height="60" width="60">
                                </div>                             
                                <div v-if="product.images == ''">
                                    <div v-if="product.image_url" class="col-md-3 mt-1">
                                        
                                            <img style="cursor:pointer" :src="product.image_url" alt="" height="60" width="60">
                                        
                                    </div>
                                    <div v-else class="col-md-3 mt-1">
                                        <img style="cursor:pointer" src="assets/images/products/default-image.jpg" alt="" height="60" width="60">
                                    </div> 
                                </div>                                                       
                                    <div class="col-md-3 mt-1 d-none">

                                    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#modal-product-image-inner" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#modal-product-image-inner" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <router-link :to="'/product-details?id='+ product.id" class="btn col-12 d-none">View Details</router-link>
                    </div>
                    <div class="modal-product-details col-6 pt-3" v-if="product.variation">
                        <a href="#" class="text-decoration-none text-dark">
                            
                            <h3>{{product.product ?? product.default_name}}</h3>
                        </a>
                        <h6 class="price pt-3">
                            <div class="price" v-if="product.regular_price > 0">
                                <del class="text-muted">{{ Number(product.variation.default_sell_price).toFixed(2)}}৳
                                </del>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.regular_price).toFixed(2)}}৳</span>
                            </div>                            
                            <div class="price" v-else>
                                <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.default_sell_price).toFixed(2)}}৳</span>
                            </div>
                        </h6>
                        <p class="text-sm" v-html="product.description">
                        </p>                        
                        <strong class="text-sm" v-if="product.type === 'variable'">
                            <span>Variations:</span>
                            <div class="d-flex justify-content-between">
                                <div class="" v-for="v in variations" :key="v.id">
                                    <label><input type="radio" :value="v.id" v-model="size" class="size"/> {{v.name}}</label>
                                </div>

                            </div>

                        </strong><br/>
                        <div class="quantity-buy d-flex">
                            <div class="quantity">
                                <button class="cart-qty-minus" type="button" @click="decreaseQty">-</button>
                                <input type="number" min="1" max="10" v-model="quantity" class="input-text qty" style="width:47% !important" @blur="updateQty({product, qty:quantity})"/>
                                <button class="cart-qty-plus" type="button" @click="increaseQty">+</button>
                                
                            </div>
                            <br/>
                            <button class="btn" @click="AddToCart(product, variations, 1, size, quantity)">Add To Cart</button>
                        </div>
                        <hr>
                        <p><b>SKU:</b> {{product.sku}}</p>
                        <p><b>Category: </b> {{product.category}}</p>
                        
                    </div>
                </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
    </div>
</template>
<script>
import mixins from '../../Mixins';
export default {
    props: {
        product:{
            type:Object,
        }, 
        variations:{
            type: Object,
        }, 
        heading: {
            type: String,
            default: "Default Heading"
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    mixins: [mixins],
    data(){
        return {
            size: "",
            quantity: 1,
        }
    },
    methods: {
        increaseQty()
        {
           if(this.quantity < 10)
           {
            this.quantity +=1;
           }
        },
         decreaseQty()
        {
            if(this.quantity >1)
            {
                this.quantity -=1;
            }
        }
    }
    

}
</script>
<style scoped>
    div#player {
        margin-left: -20%;
}

.the-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.the-modal__container {
  width: 800px;
  min-height: 500px;
  background-color: white;
  border-radius: 9px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  position: relative;
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
  margin-top: 12px;
}
.the-modal__close:hover {
  color: red;
}
.the-modal__body {
  padding: 44px;
  padding-top: 22px;
}

@media (max-width: 805px){
    .the-modal__container{
        width: 100%;
    }
    .the-modal__close{
        display: block;
    }
}


</style>