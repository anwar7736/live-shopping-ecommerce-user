<template lang="">
    <div>
        <section>
            <div class="container mt-5 mb-5">
                <loading-view v-if="seen"/>
                <div class="row deal-day-row flash-sell" v-if="seen == false">
                    <product-view :product="sale" v-for="sale in flashSell" :key="sale.id" grid="col-lg-2 col-md-3 col-6 product p-2"/>
                 </div>
            </div>
        </section>
        

    </div>
</template>
<script>
import mixins from '../Mixins';
export default {
    mixins: [mixins],
    data(){
        return{
            flashSell: {},
            seen: true,
            show: false,
        }
    },
    methods: {

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
    components: {

    },
    created()
    {
        this.$store.dispatch("FlashSell")
        .then(res=>{
            this.flashSell = res;
            this.seen = false;
        })
    }
}
</script>
<style scoped>
    .deal-day-row{
        border-left: 0;
    }
    .deal-day-row .product{
        border-right: 0 !important;
        border-bottom: 0 !important;
        border-top: 0 !important;
        height: auto !important;
    }
</style>