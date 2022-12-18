<template>
    <div>
        <section>
            <div class="features pt-4 pb-4 ps-3 pe-3" style="background-color: #ed6c00;">
                <div class="container">
                    <div class="row feature-row">
                        <div class="col-lg col-md-4 col-12 feature-col m-auto text-start p-2" v-for="section in sections" :key="section.id">
                            <div class="d-flex feature-flex">
                                <div class="icon text-center">
                                    <img :src="section.image" alt="" height="40" class="mt-2 pe-2">
                                </div>
                                <div class="text text-light">
                                    <h6><b>{{section.title}}</b></h6>
                                    <p>{{section.short_desc}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sections: {},
        }
    },

    created()
    {
        this.$store.dispatch("DeliverySection")
        .then(res=>{
            this.sections = res;
            
        });
    }
    
}
</script>
<style>
    
</style>