<template>
    <div>
                <!-- Best Deal section start  -->
            <section>
            <div class="container mt-5">
                <div class="best-deal global-cat-sec">
                    <div class="section-cat-title">
                        <h2>Best Deal</h2>
                    </div>
                    <div class="row global-cat-row mt-5">
                        <div class="col-lg-3 col-md-12 col-12 global-single-col">
                                <div class="global-single-item" >
                                    <div class="global-single-sec-text col-lg-7 col-md-12">
                                        <h2>
                                            {{image.title}}
                                        </h2>
                                        <router-link to="/shop">Read More</router-link>
                                    </div>
                                    <div class="img" :style="{ 'background-image': 'url(' + image.image + ')' }">

                                    </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 global-carousel-owl-col">
                           
                           <div class="owl-tab-type d-flex tabs">
                               <div class="btn" :class="{active:hot}" @click="bestHot">
                                   <i class="fas fa-fire"></i> HOT
                               </div>
                               <div class="btn" :class="{active:newClass}" @click="bestNew">
                                   <i class="fas fa-fire"></i>  NEW ARRIVAL
                               </div>
                           </div>
                 
                           <loading-view class="d-none"/>
                              <div class="row row deal-day-row home-slider-product" v-if="seen == false">
                                <slider-view v-if="best_hot" :products="products.hot"/>
                            <div class="" v-if="seen == false">
                                <slider-view v-if="best_new" :products="products.new"/>
                           </div>
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Best Deal section end  -->
    </div>
</template>
<script>
import mixins from '../Mixins';
export default {
    components: {
        
    },
    mixins: [mixins],
    data(){
        return{
            products: {},
            product: {},
            image: {},
            product_info: {},
            variations : {},
            seen: true,
            best_hot:true,
            best_new:false,
            hot: 'active',
            newClass: '',
            size: "",
            quantity: 1,
        }
    },
    methods: {
        bestHot(){
            this.best_hot = true;
            this.best_new = false;
            this.hot = 'active';
            this.newClass = '';
        }, 
        bestNew(){
            this.best_hot = false;
            this.best_new = true;
            this.hot = '';
            this.newClass = 'active';
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
    created(){
        this.$store.dispatch("Category_Image", "BEST")
        .then(res=>{
            this.image = res;
            this.seen = false;
            
        });    
        this.$store.dispatch("BestDeal")
        .then(res=>{
            this.products = res;
            this.seen = false;
        })
        
    }
}
</script>
<style>
    
</style>