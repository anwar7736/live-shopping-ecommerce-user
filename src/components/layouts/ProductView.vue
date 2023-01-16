<template>
    <div :class="grid">
        <div class="discount-tag" v-if="product.regular_price > 0 && calculateDiscount(product) > 0">
            <span>
                {{calculateDiscount(product)}}% OFF
            </span>
        </div>                        
        <div class="options-pannel2">
            <ul>
                <li class="d-lg-block d-md-block d-none" title="compare">
                    <a href="#" class="compare" @click.prevent="addToCompareList(product)">
                        <i class="fas fa-random"></i>
                    </a>
                </li>
                <li title="Quick View" class="d-lg-block d-md-block d-none">
                    <a href="#" class="compare"  @click.prevent="productInfo(product.id)">
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
        <div class="images">
            <router-link :to="'/product-details?id='+ product.id">
                <img :src="product.image_url"/> 
            </router-link>
        </div>
        
        <div class="product-details text-center pt-2">
            <div class="product_name">
                <router-link :to="'/product-details?id='+ product.id" class="text-dark" style="text-decoration: none; font-weight: 600;">{{product.product ?? product.default_name}}
                </router-link>
            </div>
            <div class="price" v-if="product.regular_price > 0">
            <del class="text-muted">{{ Number(product.variation.default_sell_price).toFixed(2)}}৳
            </del>
            <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.regular_price).toFixed(2)}}৳</span>
            </div>                            
            <div class="price" v-else>
            <span class="ps-1" style="color: #ff7400; font-weight: bold;">{{Number(product.variation.default_sell_price).toFixed(2)}}৳</span>
            </div>
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
            <br/>                      
        </div>
        
    <quick-view v-model="show" :product="product_info" :variations="variations"/>
    </div>
</template>

<script>
import mixins from '../../Mixins';
export default {
    mixins: [mixins],
    props: {
        product:{
            type: Object,
        },
        grid: {
            type: String,
            default: 'col-lg-3 col-md-4 col-6 product p-2',
        }
    },
    data(){
        return{
            product_info : {},
            variations : {},
            show : false,

        }
    },
    methods: {
        productInfo(id)
        {
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
                this.show = true;
                
            })
        },
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
    },
    computed: {

    },
    components: {

    },
    created()
    {

    }
}
</script>

<style>

</style>