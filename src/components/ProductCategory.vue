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
                                    <router-link :to="'/product-category?id='+ cat.id" @click.prevent="categoryFilter(cat.id)"><span :class="selectedCat == cat.id ? 'selected-category' : ''">{{cat.name}}</span></router-link>
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
                            <div class="color-box row">
                                <a @click.prevent="productFilterByColorOrSize(color.id, 'color')" class="color d-flex justify-content-between text-decoration-none text-dark p-1 col-md-4" v-for="color in colors" :key="color.id">
                                    <div class="left d-flex">
                                        <div class="color-bg" :class="selectedColor === color.id ? 'selected-item' : ''"></div>
                                        <p>{{color.name}}</p>
                                    </div>
                                    <div class="product-items d-none" >
                                        <span>{{color.total}}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3 filter-by-size sidebar-box">
                            <h5 class="title text-cap">Filter By Size</h5>
                            <div class="size-box ml-3">
                                <div class="product-items row">
                                        <span>T-SHIRT</span>
                                        <a v-for="shirt in sizes.shirt_sizes" :key="shirt.id" class="size d-flex justify-content-between text-decoration-none text-dark p-1 col-md-3" @click.prevent="productFilterByColorOrSize(shirt.id, 'size')">
                                            <div class="product-items" :class="selectedSize === shirt.id ? 'selected-item' : ''">
                                                {{shirt.name}}
                                            </div>
                                        </a>
                                    </div>  
                                    <hr/>             
                                    <div class="product-items row">
                                        <span>PANT</span>
                                        <a v-for="pant in sizes.pant_sizes" :key="pant.id" class="size d-flex justify-content-between text-decoration-none text-dark p-1 col-md-3" @click.prevent="productFilterByColorOrSize(pant.id, 'size')">
                                            <div class="product-items" :class="selectedSize === pant.id ? 'selected-item' : ''">
                                                {{pant.name}}
                                            </div>
                                        </a>
                                    </div>   
                                    <hr/>                                      
                                    <div class="product-items row">
                                        <span>BLAZER</span>
                                        <a v-for="blazer in sizes.blazer_sizes" :key="blazer.id" class="size d-flex justify-content-between text-decoration-none text-dark p-1 col-md-3" @click.prevent="productFilterByColorOrSize(blazer.id, 'size')">
                                            <div class="product-items" :class="selectedSize === blazer.id ? 'selected-item' : ''">
                                                {{blazer.name}}
                                            </div>
                                        </a>
                                    </div>
                           
                                <a @click.prevent="productFilterByColorOrSize(size.id)" class="size d-flex justify-content-between text-decoration-none text-dark p-1 d-none" v-for="size in sizes" :key="size.id">
                                    <div class="left">
                                        <div class="color-bg" :style="'background-color:'+ size.name"></div>
                                        <p>{{size.name}}</p>
                                    </div>
                                    <div class="product-items">
                                        <span>{{size.total}}</span>
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
                                <a href="#" class="nav-link me-3 font-lg d-none d-md-none d-lg-block" id="" @click.prevent="changeGrid(12)">
                                    <i class="fas fa-bars"></i> 
                                </a>
                                <a href="#" class="nav-link me-3 ms-3 font-lg d-none d-md-none d-lg-block" id="" @click.prevent="changeGrid(3)">
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
                                <a href="#" class="nav-link me-3 ms-3 font-lg" id="" @click.prevent="showHide">
                                    <i class="fas fa-sliders-h" ></i> Filter
                                </a>
                            </nav>
                        </div>
                        <div class="filter-dropdown" v-if="active">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12 sort-by pb-3">
                                    <div class="mb-3 filter-by-size sidebar-box">
                            <h5 class="title text-cap">Filter By Size</h5>
                            <div class="size-box ml-3">
                                <div class="product-items row">
                                        <span>T-SHIRT</span>
                                        <a v-for="shirt in sizes.shirt_sizes" :key="shirt.id" class="size d-flex justify-content-between text-decoration-none text-dark p-1 col-md-3" @click.prevent="productFilterByColorOrSize(shirt.id, 'size')">
                                            <div class="product-items" :class="selectedSize === shirt.id ? 'selected-item' : ''">
                                                {{shirt.name}}
                                            </div>
                                        </a>
                                    </div>  
                                    <hr/>             
                                    <div class="product-items row">
                                        <span>PANT</span>
                                        <a v-for="pant in sizes.pant_sizes" :key="pant.id" class="size d-flex justify-content-between text-decoration-none text-dark p-1 col-md-3" @click.prevent="productFilterByColorOrSize(pant.id, 'size')">
                                            <div class="product-items" :class="selectedSize === pant.id ? 'selected-item' : ''">
                                                {{pant.name}}
                                            </div>
                                        </a>
                                    </div>   
                                    <hr/>                                      
                                    <div class="product-items row">
                                        <span>BLAZER</span>
                                        <a v-for="blazer in sizes.blazer_sizes" :key="blazer.id" class="size d-flex justify-content-between text-decoration-none text-dark p-1 col-md-3" @click.prevent="productFilterByColorOrSize(blazer.id, 'size')">
                                            <div class="product-items" :class="selectedSize === blazer.id ? 'selected-item' : ''">
                                                {{blazer.name}}
                                            </div>
                                        </a>
                                    </div>
                           
                                <a @click.prevent="productFilterByColorOrSize(size.id)" class="size d-flex justify-content-between text-decoration-none text-dark p-1 d-none" v-for="size in sizes" :key="size.id">
                                    <div class="left">
                                        <div class="color-bg" :style="'background-color:'+ size.name"></div>
                                        <p>{{size.name}}</p>
                                    </div>
                                    <div class="product-items">
                                        <span>{{size.total}}</span>
                                    </div>
                                </a>
                            </div>
                            </div>
                    
                            </div>
                                <div class="col-lg-4 col-md-4 col-12 price-filter pb-3">
                                    <h5>Price Filter</h5>
                                    <div class="price-wrapper">
                                <fieldset class="filter-price">
                                 
                                  <div class="price-field">
                                    <input @change="rangeChange"  type="range"  min="0" max="69000"  id="lower" v-model="rangeFrom">
                                    <input @change="rangeChange"  type="range" min="0" max="69000" id="upper" v-model="rangeTo">
                                     
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
                                <div class="col-lg-4 col-md-4 filter-by-color col-12 color-box">
                                    <h5 class="title text-cap m-2">Filter By Color</h5>
                                    <a @click.prevent="productFilterByColorOrSize(color.id,'color')" class="color d-flex justify-content-between text-decoration-none text-dark p-1 " v-for="color in colors" :key="color.id">
                                        <div class="left d-flex">
                                            <div class="color-bg" :class="selectedColor === color.id ? 'selected-item' : ''"></div>
                                            <p>{{color.name}}</p>
                                        </div>
                                        <div class="product-items d-none">
                                            <span>{{color.name}}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <loading v-if="seen"/>
                        <div class="all-products row deal-day-row" v-if="seen == false">
                            <div class="col-lg-3 col-md-3 col-6 product p-2" v-for="product in categoryItems" :key="product.id">
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
                                    <router-link :to="'/product-details?id='+ product.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{product.product ?? product.default_name}}
                                    </router-link>
                                  </div>
                                  <div class="price" v-if="product.variation.discount_price">
                                    <del class="text-muted">{{Number(product.variation.default_sell_price).toFixed(2)}}৳
                                    </del>
                                    <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.default_sell_price -  product.variation.discount_price.price_inc_tax).toFixed(2)}}৳</span>
                                    </div>                            
                                    <div class="price" v-else>
                                        <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.default_sell_price).toFixed(2)}}৳</span>
                                    </div>
                                    <p class="product-details-p" style="display: none;" v-html="product.description">
                                    </p>
                                    <!--Quickview Modal-->
                                    <quickView :product="product_info" :variations="variations"></quickView>
                                    
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
        <!--checkout logo -->
        <buy/>   

    </div>
</template>
<script>
import mixins from '../Mixins';
import quickView from './layouts/QuickViewModal';
import checkout from './layouts/CheckoutModal';
import loading from './layouts/LoadingComp';
import buy from './layouts/BuyModal';

export default {
    mixins: [mixins],
    data(){
        return{
            colors: {},
            sizes: {},
            categories: {},
            products: {},
            product_info : {},
            variations : {},
            rangeFrom: 0,
            rangeTo: 0,
            seen: true,
            active: false,
            selectedCategory: '',
            selectedColor: '',
            selectedSize: '',
        }
    },
    components: {
        quickView,
        checkout,
        loading,
        buy
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
            this.selectedCategory = id;
            this.$store.dispatch("ProductFilterByCategory", id)
            .then(res=>{
                this.products = res;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
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
        
        productFilter()
        {
            let color = this.selectedColor == '' ? 0 : this.selectedColor;
            let size = this.selectedSize == '' ? 0 : this.selectedSize;
            let amount = {from: this.rangeFrom, to: this.rangeTo};

            this.seen = true;
            this.$store.dispatch("productFilter",{color, size, amount})
            .then(res=>{
                this.products = res;
                this.seen = false;
            })
            .catch(err=>{
                console.log(err);
            })
        },

        productFilterByColorOrSize(id, type)
        {
            if(type === 'color')
            {
                if(this.selectedColor == id)
                {
                    this.selectedColor = "";
                }
                else this.selectedColor = id;
            }
            else if(type === 'size')
            {
                if(this.selectedSize == id)
                {
                    this.selectedSize = "";
                }
                else this.selectedSize = id;
            }
            this.productFilter();
            // this.seen = true;
            // this.$store.dispatch("ProductFilterByColorOrSize", id)
            // .then(res=>{
            //     this.products = res;
            //     this.seen = false;
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
            
        },
        rangeChange()
        {
            this.productFilter();
        },
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
        categoryItems()
        {
            return this.products ?? this.$store.getters.Get_Category_Items;
        },
        selectedCat()
        {
            return this.selectedCategory;
        }
    },
    created()
    {
        this.$store.dispatch("MAX_PRICE")
        .then(res=>{
            this.rangeTo = res;
        })
        .catch(err=>{
            console.log(err);
        });

        this.selectedCategory = this.$route.query.id;

        this.categoryFilter(this.$route.query.id);
        
        this.$store.dispatch("CATEGORY_LIST")
        .then(res=>{
            this.categories = res.categories;
        })
        .catch(err=>{
            console.log(err);
        });
        
        this.$store.dispatch("ShopProductList")
        .then(res=>{
            this.products = res;
            this.seen = false;
        })
        .catch(err=>{
            console.log(err);
        });     
        
        this.$store.dispatch("productSizesAndColors")
        .then(res=>{
            this.sizes = res;
            this.colors = res.colors;
            this.seen = false;
        })
        .catch(err=>{
            console.log(err);
        });



    },

}

</script>
<style>

</style>