<template>
    <div>
                <!--modal start-->
                <div class="modal fade " id="product-modal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header border-0">
                <div class="d-flex justify-content-end position-absolute top-0 end-0 p-2">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
            <div class="modal-body product-popup">
                
                <div class="row">
                    <div class="modal-product-image col-6">
                        <div id="modal-product-image-inner" class="carousel slide" data-bs-ride="carousel"  data-bs-touch="true">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active" v-if="product.video">
                                    <iframe width="560" height="400" :src="product.video+'?autoplay=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>
                                </div>                                
                                <div class="carousel-item">
                                    <img :src="product.image_url" alt="" class="col-12"/> 
                                </div>
                                <div class="carousel-item">
                                    <img :src="product.image_url" alt="" class="col-12"/> 
                                </div>
                                <div class="carousel-item">
                                    <img :src="product.image_url" alt="" class="col-12"/> 
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
                        <router-link :to="'/product-details?id='+ product.id" class="btn col-12">View Details</router-link>
                    </div>
                    <div class="modal-product-details col-6 pt-3" v-if="product.variation">
                        <a href="#" class="text-decoration-none text-dark">
                            
                            <h3>{{product.product}}</h3>
                        </a>
                        <h6 class="price pt-3">
                            <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.default_sell_price).toFixed(2)}}৳</span>
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
                                <input type="number" min="1" v-model="quantity" class="input-text qty" />
                                <button class="cart-qty-plus" type="button" value="+" @click="increaseQty">+</button>
                                
                            </div>
                            <br/>
                            <button class="btn" @click="AddToCart(product, size, quantity)">Add To Cart</button>
                        </div>
                        <hr>
                        <p><b>SKU:</b> {{product.sku}}</p>
                        <p><b>Category: </b> {{product.category}}</p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<!--modal end-->
    </div>
</template>
<script>
import mixins from '../../Mixins';
export default {
    props: ['product', 'variations'],
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
            this.quantity +=1;
        },
         decreaseQty()
        {
            if(this.quantity >1)
            {
                this.quantity -=1;
            }
        }
    },
    

}
</script>
<style>
    
</style>