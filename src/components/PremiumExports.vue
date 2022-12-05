<template>
    <div>
                <!-- gift card section start  -->
                <section>
            <div class="container">
                <div class="gift-card global-cat-sec">
                    <div class="section-cat-title">
                        <h2>PREMIUM EXPORTS</h2>
                    </div>
                    
                </div>
                    <loading v-if="seen"/>
                    <carousel :items-to-show="4" v-if="seen == false">
                        <slide  v-for="item in products" :key="item.id">
                            <div>
                                <div class="image" >
                                    <img src="assets/images/gift-card/200tk.jpg" alt="200taka gift card" class="p-2">
                                </div>
                            </div>
                        </slide>
                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>
            </div>
        </section>
        <!-- gift card section end  -->
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import loading from './layouts/LoadingComp';
export default {
    components: {
            loading,
            Carousel,
            Slide,
            Pagination,
            Navigation
    },
    data(){
        return {
            products: [],
            seen: true,
    }
    },
    created(){
        this.$store.dispatch("PremiumExports")
        .then(res=>{
            this.products = res;
            this.seen = false;
        });
    },
    
}
</script>
<style>
    
</style>