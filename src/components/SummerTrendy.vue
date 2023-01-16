<template>
    <div>
                <!-- SUMMER TRENDY section start  -->
                <section>
            <div class="container">
                <div class="summery-trendy global-cat-sec">
                    <div class="section-cat-title">
                        <h2>Summer Trendy</h2>
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
                                <div class="btn" :class="{active:hot}" @click="summerHot">
                                    <i class="fas fa-fire"></i> HOT
                                </div>
                                <div class="btn" :class="{active:newClass}" @click="summerNew">
                                    <i class="fas fa-fire"></i>  NEW ARRIVAL
                                </div>
                            </div>
                  
                            <loading-view class="d-none"/>
                               <div class="row row deal-day-row home-slider-product" v-if="seen == false">
                                    <slider-view v-if="summer_hot" :products="products.hot"/>
                                    <div class="" v-if="seen == false">
                                        <slider-view v-if="summer_new" :products="products.new"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- SUMMER TRENDY section end  -->
    </div>

</template>
<script>
import mixins from '../Mixins';
export default {  
    components: {

    },
    mixins: [mixins],
    data(){
        return {
            products: [],
            image: {},
            product_info: {},
            variations: {},
            seen: true,
            summer_hot:true,
            summer_new:false,
            hot: 'active',
            newClass: '',
        }
    },
    methods: {
        summerHot(){
            this.summer_hot = true;
            this.summer_new = false;
            this.hot = 'active';
            this.newClass = '';
        }, 
        summerNew(){
            this.summer_hot = false;
            this.summer_new = true;
            this.hot = '';
            this.newClass = 'active';
        },
    },
    created(){
        this.$store.dispatch("Category_Image", "SUMMER")
        .then(res=>{
            this.image = res;
            this.seen = false;
            
        });       
         
        this.$store.dispatch("SummerTrendy")
        .then(res=>{
            this.products = res;
            this.seen = false;
            
        });
    },
}
</script>
<style>

</style>