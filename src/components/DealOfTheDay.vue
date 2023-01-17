<template>
    <div>
              <!-- All Products Grid Section start  -->
              <section>
            <div class="container">
                <div class="liner-continer">
                    <h4 class="title">DEALS OF THE DAY</h4> 
                </div>
                <loading-view v-if="seen"/>
                <div class="all-products" v-if="seen == false">
                    <div class="row deal-day-row">
                        <product-view v-for="product in products" :key="product.id" :product="product" grid="col-lg-2 col-md-3 col-6 product p-2"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import mixins from '../Mixins';
export default {
    mixins: [mixins],
    components: {

    },
    data(){
        return{
            products: [],
            product: [],
            product_info : {},
            variations : {},
            seen: true,
            size: "",
            quantity: 1,
            
        }
    },
    methods: {
        productInfo(id){
            this.$store.dispatch("ProductFilterById", id)
            .then(res=>{
                this.product = res.product;
                this.variations = res.variations;
                console.log(res);
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
    created(){
        this.$store.dispatch("DealsOfTheDay")
        .then(res=>{
            this.products = res;
            this.seen = false;
           
        })
    }
}
</script>
<style scoped>
    .deal-day-row{
        max-height: 100vh;
        overflow: scroll;
    }
</style>