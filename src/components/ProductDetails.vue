<template lang="">
    <div>
        <section>
            <link rel="stylesheet" href="assets/lightbox/magnific-popup.css"/>
            <link rel="stylesheet" href="assets/css/product.css"/>
            <loading-view v-if="loading"/>
            <div class="container mt-lg-3 mt-1 single-product-row" v-else>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 product-image-col row pt-2 pt-lg-3">
                        <div class="image single-product-images">
                            <div class="discount-tag" v-if="product.regular_price > 0 && calculateDiscount(product) > 0">
                                <span>
                                    - {{calculateDiscount(product)}}%
                                </span>
                            </div> 
                            <div id="product-single" class="carousel slide" data-bs-ride="carousel">
                            
                                <div class="carousel-inner" role="listbox">
                                    <a href="#" :class="index === activeID ? 'carousel-item active' : 'carousel-item active'" v-for="(image, index) in product.images" :key="image.id">
                                        <!-- <vue-image-zoomer>
                                            <img :src="image.image" alt="Image" class="w-100 d-block"/>
                                        </vue-image-zoomer> -->
                                        <img :src="image.image" alt="Image" class="w-100 d-block"/>
                                    </a>                                    
                                    <div v-if="product.images.length === 0">
                                        <div v-if="product.image_url">
                                        <a href="#" class="carousel-item active" :data-bs-interval="!isInterval">
                                            <img :src="product.image_url" alt="Image" class="w-100 d-block"/>
                                        </a>
                                        </div>
                                        <div v-else>
                                            <a href="#" class="carousel-item active">
                                                <img src="assets/images/products/default-image.jpg" alt="Image" class="w-100 d-block"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div :class="activeID == product.id ? 'carousel-item active' : 'carousel-item'" class="d-none">
                                        
                                    </div> 
                                </div>
                                <div class="d-flex mt-2">
                                    <div v-if="product.images.length === 0">
                                        <div v-if="product.image_url" class="col-md-3 mt-1" :data-bs-interval="!isInterval">
                                            <a href="#">
                                                <img style="cursor:pointer" :src="product.image_url" alt="" height="60" width="60">
                                            </a>
                                        </div>
                                    <div v-else class="col-md-3 mt-1">
                                        <img style="cursor:pointer" src="assets/images/products/default-image.jpg" alt="" height="60" width="60">
                                    </div> 
                                    </div>      
                                    <div @click="carouselActive(index)" class="col-md-3 col-3 mt-1" v-for="(image, index) in product.images" :key="image.id">
                                        <img style="cursor:pointer" :src="image.image" alt="" height="60" width="60">
                                    </div>    

                                    <div class="col-md-3 col-3 mt-1 d-none">
                                        
                                    </div>
                                </div>
                                <button :class="{'d-none': isInterval}" class="carousel-control-prev" type="button" data-bs-target="#product-single" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button :class="{'d-none': isInterval}" class="carousel-control-next" type="button" data-bs-target="#product-single" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-product-details col-lg-8 col-md-6 col-12 pt-3 row">
                        <div class="col-lg-7 col-md-12">
                            <nav aria-label="breadcrumb" class="pt-0">
                            <ol class="breadcrumb">
                              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                              <li class="breadcrumb-item">
                                <router-link :to="'/product-category?id='+ product.category">{{product.category}}</router-link>
                            </li>
                              
                              <li class="breadcrumb-item active" aria-current="page">{{product.product ?? product.default_name}}</li>
                            </ol>
                          </nav>
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
                        
                        <div class="d-flex" style="flex-wrap: wrap;">
                            <div class="quantity-buy d-flex me-3 mb-3">
                            <div class="quantity">
                                <button class="cart-qty-minus" id="dec" @click="decrement" type="button" value="-">-</button>
                                <input type="text" name="qty" id="qty" min="1" @blur="updateQty" v-model="qty" class="input-text qty" />
                                <button class="cart-qty-plus" type="button" @click="increment" id="inc" value="+">+</button>
                                
                            </div>
                            <button class="btn" @click="AddToCart(product, variations, '', size, qty), show = true">Buy</button>

                        </div>
                            <div class="h-100">
                                <button data-bs-toggle="modal" data-bs-target="#find-store-modal" class="btn bg-dark rounded-0 text-light find-in-store">
                                Find Store
                            </button>
                            </div>
                        </div>
                        <div class="products-options mt-4 d-flex" style="flex-wrap: wrap;">
                            <a href="#" class="text-decoration-none text-dark me-3" @click.prevent="addToCompareList(product)">
                                <b><i class="fas fa-random"></i> Compare</b>
                            </a>
                            <a href="#" class="text-decoration-none text-dark me-3" @click.prevent="AddToWishList(product)">
                                <b><i class="far fa-heart"></i> Add to Wishlist</b>
                            </a>
                            <a href="#" class="text-decoration-none text-dark d-none" data-bs-toggle="modal" data-bs-target="#size-guide">
                                <b><i class="fas fa-ruler"></i> Size Guide</b>
                            </a>
                        </div>
                        <hr/>
                        <p><b>SKU:</b> {{product.sku}}</p>
                        <p><b>Category: </b> {{product.category}}</p>
                        <p class="text-sm" v-html="product.description"></p>
                        <p class="d-none"><b>Tags: </b>  </p>
                        <p class="d-none"><b>Share: </b> 
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

                        <div class="col-lg-5 col-md-12 col-10 m-auto" v-if="product.video">
                            <div class="">
                                <iframe width="100%" height="400" :src="'https://www.youtube.com/embed/'+product.video" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr/>
            <div id="actab4" class="tab-content text-start container mb-2">
                        <div class="row justify-content-center align-items-center g-2">
                            <div class="col-lg-6 col-12">
                                

                                <h5 class="title"><b>
                                    DELIVERY & SHIPPING PROCESS
                                </b></h5>
                                <p>We deliver via REDX and SUNDARBAN Courier for the cash-on-delivery process. Here the system is pretty easier as follows -</p>
                                <ul>
                                    <li>-Choose your product first</li>
                                    <li>-Click on "Buy Now."</li>
                                    <li>-Fill up your name, phone number, and delivery address,</li>
                                    <li>-Click on place order, That's all!</li>
                                </ul>
                                <p>
                                    Now wait for the call from our end. In short, one of our telesales executives will call you to confirm the order for shipping. Meanwhile, you must pay the delivery charge via Live Shopping's only bkash merchant number 01911111566.
                                </p>
                                <p>
                                    NOTE: DO NOT PAY ANYWHERE ELSE.
                                </p>
                                <p>
                                    After the shipment of your order, our telesales executive will call you again, text you, mail you, or messenger you with your invoice number, including shipping details.
                                </p>
                                <p>
                                    We know you don't like to wait, right? Don't worry, you don't need to wait more than 48 hours for Dhaka and 72 hours across the country.
                                </p>
                            </div>
                            <div class="col-lg-3 col-12 col-md-6">
                                <img src="assets/images/others/redx_courier_logo-400x195.png" alt="" class="col-12">
                            </div>
                            <div class="col-lg-3 col-12 col-md-6">
                                <img src="assets/images/others/sundarban_courier_logo-300x300.png" alt="" class="col-12">
                            </div>
                        </div>
                      </div>

                <!-- Checkout modal  -->
                <checkout-view v-model="show"/>
                <!--Quickview Modal-->
                <FindStore :product="product" :variations="variations" :locations="locations"/>
        </section>

</div>
</template>
<script>
import mixins from '../Mixins';
// import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css';
import FindStore from './layouts/FindStore';
import toastr from 'toastr';
export default {

    components: {
        // VueImageZoomer,
        FindStore,
    },
    mixins: [mixins],
    data()
    {
        return {
            product : {},
            variations : {},
            qty: 1,
            size: '',
            active: 1,
            locations: {},
            show: false,
            loading: true,
        }
    },
    methods: {
        increment()
        {
           if(this.qty < 10)
           {
                this.qty++;
           }
       
        },
        decrement()
        {
            if(this.qty > 1)
            {
                this.qty--;
            }
        },
        carouselActive(id)
        {
            this.active = id;
        },
        updateQty()
        {
           if(this.qty > 10)
           {
                toastr.error('Quantity will be less than or equal 10!');
           }
        }
    },
    // breforeCreate(){
    //     this.$destroy();
    // },    
    // breforeMount(){
    //     this.$destroy();
    // },    
    // breforeUnmount(){
    //     this.$destroy();
    // },    
    // unmounted(){
    //     this.$destroy();
    // },
    deactivated() {
        this.$destroy();
    },
    created()
    {
        
        let product_id = this.$route.query.id;
        this.$store.dispatch("ProductFilterById", product_id)
        .then(res=>{
            console.log(res);
            this.product = res.product;
            this.variations = res.variations;
            console.log(this.product);
            this.loading = false;

        })
        .catch(err=>{
            console.log(err);
        });
        

        this.$store.dispatch("LocationWiseStock", {product_id, size:''})
            .then(res=>{
                this.locations = res;
            })
        },
        
    computed: {
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        },
        activeID()
        {
            return this.active;
        },
        isInterval(){
            return this.product.images.length < 2;
        }
    },

    
    

}
</script>
<style scoped>
    .discount-tag{
  position: absolute;
  margin-top: 30px;
  margin-left: 5px;
  top: 0;
  padding: 2px 10px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  background-color: var(--main-color);
  z-index: 999;
}
</style>