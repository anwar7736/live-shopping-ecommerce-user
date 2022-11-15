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
                                <div class="carousel-item active">
                                    <img :src="product.image_url" alt="Image" class="col-12"/> 
                                </div>
                                <div class="carousel-item">
                                    <img :src="product.image_url" alt="Image" class="col-12"/> 
                                </div>
                                <div class="carousel-item">
                                    <img :src="product.image_url" alt="Image" class="col-12"/> 
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
                    <div class="modal-product-details col-6 pt-3">
                        <a href="product.html" class="text-decoration-none text-dark">
                            <h3>{{product.product}}</h3>
                        </a>
                        <h6 class="price pt-3">
                            <del class="text-muted">{{product.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{product.default_sell_price}}৳</span>
                        </h6>
                        <p class="text-sm" v-html="product.description">
                        </p>
                        <p class="text-sm pt-4">
                            Contact us at any time:
                        </p>
                        <p class="text-sm pt-2">
                            +8801 403 111 999
                        </p>
                        <div class="quantity-buy d-flex">
                            <div class="quantity">
                                <button class="cart-qty-minus" id="dec" type="button" value="-">-</button>
                                <input type="text" name="qty" id="qty" maxlength="12" value="1" class="input-text qty" />
                                <button class="cart-qty-plus" type="button" id="inc" value="+">+</button>
                                
                            </div>
                            <button class="btn" @click="AddToCart(product)">Buy</button>
                        </div>
                        <hr>
                        <p><b>SKU:</b> {{product.sku}}</p>
                        <p><b>Category: </b> {{product.category}}</p>
                        <p><b>Tags: </b>  polo shirt, Sky Blue</p>
                        <p><b>Share: </b> 
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-telegram-plane"></i>
                            </a> 
                        </p>
                        
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
    props: ['product'],
    mixins: [mixins],

}
</script>
<style>
    
</style>