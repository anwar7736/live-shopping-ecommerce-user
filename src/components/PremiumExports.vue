<template>
    <div>
                <!-- gift card section start  -->
                <section>
            <div class="container-fluid">
                <div class="gift-card global-cat-sec">
                    <div class="section-cat-title">
                        <h2>PREMIUM EXPORTS</h2>
                    </div>
                    
                </div>
                <div class="owl-carousel gift-card-owl mt-4 mb-5">
                    <div>
                        <div class="image" >
                            <img src="assets/images/gift-card/200tk.jpg" alt="200taka gift card" class="gift-card-img col-12">
                        </div>
                    </div>
                    <div>
                        <div class="image" >
                            <img src="assets/images/gift-card/200tk.jpg" alt="200taka gift card" class="gift-card-img col-12">
                        </div>
                    </div>
                    <div>
                        <div class="image" >
                            <img src="assets/images/gift-card/200tk.jpg" alt="200taka gift card" class="gift-card-img col-12">
                        </div>
                    </div>
                    <div>
                        <div class="image" >
                            <img src="assets/images/gift-card/200tk.jpg" alt="200taka gift card" class="gift-card-img col-12">
                        </div>
                    </div>
                    <div>
                        <div class="image" >
                            <img src="assets/images/gift-card/200tk.jpg" alt="200taka gift card" class="gift-card-img col-12">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- gift card section end  -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            products: [],
        }
    },
    created(){
        this.$store.dispatch("PremiumExports")
        .then(res=>{
            this.products = res;
        });
    }
}
</script>
<style>
    
</style>