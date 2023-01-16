<template>
    <div>
                <!-- Export Quality section start  -->
                <section>
            <div class="container mt-5">
                <div class="export-quality global-cat-sec">
                    <div class="section-cat-title">
                        <!-- <h2>export Deal</h2> -->
                        <h2>Export Quality</h2>
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
                               <div class="btn" :class="{active:hot}" @click="exportHot">
                                   <i class="fas fa-fire"></i> HOT
                               </div>
                               <div class="btn" :class="{active:newClass}" @click="exportNew">
                                   <i class="fas fa-fire"></i>  NEW ARRIVAL
                               </div>
                           </div>
                 
                           <loading-view class="d-none"/>
                              <div class="row row deal-day-row home-slider-product" v-if="seen == false">
                                <slider-view v-if="export_hot" :products="products.hot"/>
                           <div class="" v-if="seen == false">
                            <slider-view v-if="export_new" :products="products.new"/>
                           </div>
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Export Quality section end  -->
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
            product: [],
            image: {},
            product_info: {},
            variations: {},
            seen: true,
            export_hot:true,
            export_new:false,
            hot: 'active',
            newClass: '',
            size: "",
            quantity: 1,
        }
    },
    methods: {
        exportHot(){
            this.export_hot = true;
            this.export_new = false;
            this.hot = 'active';
            this.newClass = '';
        }, 
        exportNew(){
            this.export_hot = false;
            this.export_new = true;
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
    mounted(){
        this.$store.dispatch("Category_Image", "EXPORT")
        .then(res=>{
            this.image = res;
            this.seen = false;
            
        });    
        this.$store.dispatch("ExportQuality")
        .then(res=>{
            this.products = res;
            this.seen = false;
        })
    }
}
</script>
<style>
    
</style>