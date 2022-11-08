<template>
    <div>
        <HomeMain :products="homeslider"></HomeMain>
        <SummerTrendy ></SummerTrendy>
        <BestDeal></BestDeal>
        <ExportQuality></ExportQuality>
        <PremiumExports></PremiumExports>
        <DealOfTheDay :products="dealsoftheday"></DealOfTheDay>
        <br/><br/>
    </div>
</template>
<script>
import HomeMain from './HomeMain';
import SummerTrendy from './SummerTrendy';
import BestDeal from './BestDeal';
import ExportQuality from './ExportQuality';
import PremiumExports from './PremiumExports';
import DealOfTheDay from './DealOfTheDay';
export default {
    data(){
        return {
            homeslider: {},
            summertrendy: {},
            bestdeal: {},
            exportquality: {},
            premiumexports: {},
            dealsoftheday: {},
        }
    },
    components: {
        HomeMain,
        SummerTrendy,
        BestDeal,
        ExportQuality,
        PremiumExports,
        DealOfTheDay,
    },
    created(){
        this.$store.dispatch("HomeSlider")
        .then(res=>{
            this.homeslider = res;
        })
        
        this.$store.dispatch("DealsOfTheDay")
        .then(res=>{
            this.dealsoftheday = res;
           
        })
    },
    mounted()
    {

    }
    
}
</script>
<style scoped>

</style>