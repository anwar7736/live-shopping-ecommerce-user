<template lang="">
    <div>
        <section>
            <div class="container mt-5 mb-5">
                <h3 class="text-center">All Searching Products</h3><hr/>
                
                <center v-if="searchItems.length == 0" class="text-danger">No Product Found!</center>
                <div class="row deal-day-row flash-sell">
                    <product-view 
                        v-for="product in searchItems" 
                        :key="product.id" 
                        :product="product"
                    />              
                 </div>
            </div>
        </section>
        
        <!--Quickview Modal-->
        <quick-view :product="product_info" :variations="variations"/>
        <!-- Checkout modal  -->
        <checkout-view :cartItems="cartItems"/>
        <!--checkout logo -->
        <buy-view/>  
    </div>
</template>
<script>
import mixins from '../Mixins';
export default {
    mixins: [mixins],
    data(){
        return{
            product_info : {},
            variations : {},
            seen: true,
        }
    },
    methods: {
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product_info = res.product;
                this.variations = res.variations;
            })
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

        searchItems()
        {
            return this.$store.getters.Get_Search_Items;
        }
        
    },
    components: {

    },
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