<template lang="">
    <div class="fixed-cart-bottom" @click="$emit('change')">
        <span>
        <i class="fas fa-shopping-cart"></i>
        </span>
        <span class="badge bg-secondary">{{cartItemCount}}</span>

    </div>
    <div>
        <button class="fixed-scroll-bottom" id="scroll-top" style="display: none;">
            <span>
                <i class="fas fa-angle-up"></i>
            </span>
        </button>
    </div>
</template>
<script>
export default {
    computed: {
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        methods: {
            
        }
    },
}
</script>
<style lang="">
    
</style>