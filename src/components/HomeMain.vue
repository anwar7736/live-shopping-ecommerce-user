<template>
    <div>
     <!-- Main content start  -->
        <section>
            <div class="container-fluid">
                <div id="cover-slide" class="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#cover-slide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><div></div></button>
                        <button type="button" data-bs-target="#cover-slide" data-bs-slide-to="1" aria-label="Slide 2">
                            <div></div>
                        </button>
                      </div>
                    <div class="carousel-inner carousel-main">
                      <loading v-if="seen"/>
                       <div v-if="seen == false">
                        <div class="carousel-item active slide" v-for="slider in sliders" :key="slider.id">
                        <div class="slide-img-1 slide-img" :style="{ 'background-image': 'url(' + slider.background_image + ')' }">
                            <h3></h3>
                            <img :src="slider.image" alt="Slider">
                            <button>Buy Now</button>
                        </div>
                      </div>
                       </div>
                    </div>
                  </div>
            </div>
            <common />

        
        </section>
        <!-- Checkout modal  -->
        <checkout :cartItems="cartItems"></checkout>
        <!--checkout logo -->
        <buy/>  
        
</div>
</template>
<script>
import mixins from '../Mixins';
import checkout from './layouts/CheckoutModal';
import loading from './layouts/LoadingComp';
import buy from './layouts/BuyModal';
import common from './layouts/CommonComp';
export default {
    components: {
        checkout,
        loading,
        buy,
        common
    },
    data(){
        return {
            seen : true,
            sliders : {},
            sections: {},
        }
    },
    mixins: [mixins],
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

    methods: {
        modalHandle()
        {
            if(this.isVisible)
            {
                this.isVisible = false;
            }
            else this.isVisible = true;
        }
    },
    created()
    {
        this.$store.dispatch("HomeSlider")
        .then(res=>{
            this.sliders = res;
            this.seen  = false;
        });

    },
    mounted()
    {

    }

}
</script>
<style>
    
</style>