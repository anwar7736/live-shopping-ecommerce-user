<template lang="">
    <div>
        <link rel="stylesheet" href="assets/css/shop.css">
        <section>
            <div class="container">
                <div class="shop row">
                    <div class="col-lg-3 col-md-5 col-10 shop-filter-sidebar">
                        <div class="category mb-3 sidebar-box">
                            <h5 class="text-cap">Product Categories</h5>
                            <ul>
                                <li  v-for="cat in categories" :key="cat.id">
                                    <router-link :to="'/product-category?id='+ cat.id" @click.prevent="categoryFilter(cat.id)">{{cat.name}}</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="price-range sidebar-box mb-4">
                            <div class="price-wrapper">
                                <fieldset class="filter-price">
                                 
                                  <div class="price-field">
                                    <input @change="rangeChange"  type="range"  min="0" max="2500"  id="lower" v-model="rangeFrom">
                                    <input @change="rangeChange"  type="range" min="0" max="2500" id="upper" v-model="rangeTo">
                                     
                                  </div>
                                   <div class="price-wrap">
                                    <span class="price-title">FILTER</span>
                                    <div class="price-wrap-1">
                                      <input id="one" value="">
                                      <label for="one"><b>{{rangeFrom}}৳</b></label>
                                    </div>
                                    <div class="price-wrap_line">-</div>
                                    <div class="price-wrap-2">
                                      <input id="two" value="">
                                      <label for="two"><b>{{rangeTo}}৳</b></label>
                                    </div>
                                  </div>
                                </fieldset> 
                              </div>
                        </div>

                        <div class="sidebar-box filter-by-color mb-4">
                            <h5 class="title text-cap">Filter By Color</h5>
                            <div class="color-box">
                                <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left d-flex">
                                        <div class="color-bg" style="background-color: white;"></div>
                                        <p>White</p>
                                    </div>
                                    <div class="product-items">
                                        <span>3</span>
                                    </div>
                                </a>
                                <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left d-flex">
                                        <div class="color-bg" style="background-color: red;"></div>
                                        <p>Red</p>
                                    </div>
                                    <div class="product-items">
                                        <span>5</span>
                                    </div>
                                </a>
                                <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left d-flex">
                                        <div class="color-bg" style="background-color: black;"></div>
                                        <p>Black</p>
                                    </div>
                                    <div class="product-items">
                                        <span>3</span>
                                    </div>
                                </a>
                                <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left d-flex">
                                        <div class="color-bg" style="background-color: gray;"></div>
                                        <p>Gray</p>
                                    </div>
                                    <div class="product-items">
                                        <span>3</span>
                                    </div>
                                </a>
                                <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left d-flex">
                                        <div class="color-bg" style="background-color: purple;"></div>
                                        <p>Purple</p>
                                    </div>
                                    <div class="product-items">
                                        <span>3</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3 filter-by-size sidebar-box">
                            <h5 class="title text-cap">Filter By Size</h5>
                            <div class="size-box">
                                <a class="size d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left">
                                        30
                                    </div>
                                    <div class="product-items">
                                        <span>3</span>
                                    </div>
                                </a>
                                <a class="size d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left">
                                        32
                                    </div>
                                    <div class="product-items">
                                        <span>5</span>
                                    </div>
                                </a>
                                <a class="size d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left">
                                        34
                                    </div>
                                    <div class="product-items">
                                        <span>1</span>
                                    </div>
                                </a>
                                <a class="size d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left">
                                        36
                                    </div>
                                    <div class="product-items">
                                        <span>6</span>
                                    </div>
                                </a>
                                <a class="size d-flex justify-content-between text-decoration-none text-dark p-1">
                                    <div class="left">
                                        38
                                    </div>
                                    <div class="product-items">
                                        <span>2</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12 col-12 all-products-widget">
                        <div class="filter-nav d-flex justify-content-between align-items-center border border-muted border-end-0 border-top-0 border-start-0">
                            <nav aria-label="breadcrumb" class="pt-2">
                                <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                  <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                              </nav>
                            <nav class="navbar">
                                <a href="#" class="nav-link me-3 font-lg d-none d-md-none d-lg-block" id="product-12">
                                    <i class="fas fa-bars"></i> 
                                </a>
                                <a href="#" class="nav-link me-3 ms-3 font-lg d-none d-md-none d-lg-block" id="product-3">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enable-background="new 0 0 19 19" xml:space="preserve">
                                        <rect width="4" height="4"></rect>
                                        <rect x="5" width="4" height="4"></rect>
                                        <rect x="10" width="4" height="4"></rect>
                                        <rect x="15" width="4" height="4"></rect>
                                        <rect y="5" width="4" height="4"></rect>
                                        <rect x="5" y="5" width="4" height="4"></rect>
                                        <rect x="10" y="5" width="4" height="4"></rect>
                                        <rect x="15" y="5" width="4" height="4"></rect>
                                        <rect y="15" width="4" height="4"></rect>
                                        <rect x="5" y="15" width="4" height="4"></rect>
                                        <rect x="10" y="15" width="4" height="4"></rect>
                                        <rect x="15" y="15" width="4" height="4"></rect>
                                        <rect y="10" width="4" height="4"></rect>
                                        <rect x="5" y="10" width="4" height="4"></rect>
                                        <rect x="10" y="10" width="4" height="4"></rect>
                                        <rect x="15" y="10" width="4" height="4"></rect>
                                        </svg>
                                </a>
                                <a href="#" class="nav-link me-3 ms-3 font-lg" id="filter" @click.prevent="showHide">
                                    <i class="fas fa-sliders-h"></i> Filter
                                </a>
                            </nav>
                        </div>
                        <div class="filter-dropdown" v-if="active">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12 sort-by pb-3">
                                    <h5>Sort By</h5>
                                    <a @click.prevent="productSortByType('popularity')" href="#" class="nav-link text-dark pt-2 active">
                                        Popularity
                                    </a>
                                    <a @click.prevent="productSortByType('average_rating')" href="#" class="nav-link text-dark pt-2">
                                        Average rating
                                    </a>
                                    <a @click.prevent="productSortByType('newness')" href="#" class="nav-link text-dark pt-2">
                                        Newness
                                    </a>
                                    <a @click.prevent="productSortByType('low_to_high')" href="#" class="nav-link text-dark pt-2">
                                        Price: Low to High
                                    </a>
                                    <a @click.prevent="productSortByType('high_to_low')" href="#" class="nav-link text-dark pt-2">
                                        Price: Hight to Low
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-4 col-12 price-filter pb-3">
                                    <h5>Price Filter</h5>
                                    <a @click.prevent="productFilterByPrice()" href="#" class="nav-link text-dark pt-2 active">
                                        All
                                    </a>
                                    <a @click.prevent="productFilterByPrice(0, 6250)" href="#" class="nav-link text-dark pt-2">
                                        0.00৳  - 6,250.00৳ 
                                    </a>
                                    <a @click.prevent="productFilterByPrice(6250, 12500)" href="#" class="nav-link text-dark pt-2">
                                        6,250.00৳  - 12,500.00৳ 
                                    </a>
                                    <a @click.prevent="productFilterByPrice(12500, 18750)" href="#" class="nav-link text-dark pt-2">
                                        12,500.00৳  - 18,750.00৳ 
                                    </a>
                                    <a @click.prevent="productFilterByPrice(18750, 25000)" href="#" class="nav-link text-dark pt-2">
                                        18,750.00৳  - 25,000.00৳ 
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-4 col-12 color-box">
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: white;"></div>
                                            <p>White</p>
                                        </div>
                                        <div class="product-items">
                                            <span>3</span>
                                        </div>
                                    </a>
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: red;"></div>
                                            <p>Red</p>
                                        </div>
                                        <div class="product-items">
                                            <span>5</span>
                                        </div>
                                    </a>
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: black;"></div>
                                            <p>Black</p>
                                        </div>
                                        <div class="product-items">
                                            <span>3</span>
                                        </div>
                                    </a>
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: gray;"></div>
                                            <p>Gray</p>
                                        </div>
                                        <div class="product-items">
                                            <span>3</span>
                                        </div>
                                    </a>
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: purple;"></div>
                                            <p>Purple</p>
                                        </div>
                                        <div class="product-items">
                                            <span>3</span>
                                        </div>
                                    </a>
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: purple;"></div>
                                            <p>Purple</p>
                                        </div>
                                        <div class="product-items">
                                            <span>3</span>
                                        </div>
                                    </a>
                                    <a class="color d-flex justify-content-between text-decoration-none text-dark p-1">
                                        <div class="left d-flex">
                                            <div class="color-bg" style="background-color: purple;"></div>
                                            <p>Purple</p>
                                        </div>
                                        <div class="product-items">
                                            <span>3</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <loading v-if="seen"/>
                        <div class="all-products row deal-day-row" v-if="seen == false">
                            <div class="col-lg-3 col-md-3 col-6 product p-2" v-for="product in products" :key="product.id">
                                <div class="discount-tag d-none">
                                    -48%
                                </div>
                                
                                <div class="images">
                                    <router-link :to="'/product-details?id='+ product.id">
                                        <img :src="product.image_url" @error="product.image_url='assets/images/products/default-image.jpg'" alt="Image" class="main-image" /> 
                                    </router-link>
                                    <div class="options-pannel2">
                                        <ul>
                                            <li class="d-lg-block d-md-block d-none" title="compare">
                                                <a href="#" class="compare" @click.prevent="addToCompareList(product)">
                                                    <i class="fas fa-random"></i>
                                                </a>
                                            </li>
                                            <li title="Quick View" class="d-lg-block d-md-block d-none">
                                                <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" @click.prevent="productInfo(product.id)">
                                                    <i class="fas fa-search"></i>
                                                </a>
                                            </li>
                                            <li title="Add To Wishlist">
                                                <a href="#" class="compare" @click.prevent="AddToWishList(product)">
                                                    <i class="far fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="product-details text-center pt-2 ps-2">

                                   <div class="product_name">
                                        <router-link :to="'/product-details?id='+ product.id" class="text-dark" style="text-decoration: none; font-weight: 600;"> {{product.product}}
                                        </router-link>
                                   </div>
                                    <div class="price">
                                        <del class="text-muted">{{product.variation.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{product.variation.default_sell_price}}৳</span>
                                    </div>
                                    <p class="product-details-p" style="display: none;" v-html="product.description">
                                    </p>
                                    <!--Quickview Modal-->
                                    <quickView :product="product_info"></quickView>
                                    
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#buy-to-cart" @click.prevent="AddToCart(product)">
                                        <div class="button m-auto text-light">
                                            <p><b>
                                                BUY NOW
                                            </b></p>
                                            <span>
                                                <i class="fas fa-shopping-cart"></i>
                                            </span>
                                        
                                        </div>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
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
import quickView from './layouts/QuickViewModal';
import checkout from './layouts/CheckoutModal';
import loading from './layouts/LoadingComp';
export default {
    mixins: [mixins],
    data(){
        return{
            categories: {},
            products: {},
            product_info : {},
            rangeFrom: 0,
            rangeTo: 2500,
            seen: true,
            active: false,
        }
    },
    components: {
        quickView,
        checkout,
        loading
    },
    methods: {
        showHide()
        {
            if(this.active)
            {
                this.active = false;
            }
            else  this.active = true;
        },
        categoryFilter(id)
        {
            this.seen = true;
            this.$store.dispatch("ProductFilterByCategory", id)
            .then(res=>{
                this.products = res;
                this.seen = false;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res;
            })
        },

        productSortByType(type)
        {
            this.seen = true;
            this.$store.dispatch("productSortByType", type)
            .then(res=>{
                this.products = res;
                this.seen = false;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        
        productFilterByPrice(from = '', to = '')
        {
            this.seen = true;
            this.$store.dispatch("productFilterByPrice",{from, to})
            .then(res=>{
                this.products = res;
                this.seen = false;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        rangeChange()
        {
            this.productFilterByPrice(this.rangeFrom,this.rangeTo);
        }
    },
    computed: {
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },
    created()
    {
        this.categoryFilter(this.$route.query.id);

        this.$store.dispatch("CATEGORY_LIST")
        .then(res=>{
            this.categories = res.categories;
        })
        .catch(err=>{
            console.log(err);
        })
        
        this.$store.dispatch("ProductFilterByCategory", this.$route.query.id)
        .then(res=>{
            this.products = res;
            this.seen = false;
        })
        .catch(err=>{
            console.log(err);
        })

    },

}

</script>
<style lang="">
    
</style>