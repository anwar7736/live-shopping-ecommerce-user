<template>
    <div>
        <HomeMain></HomeMain>
        <SummerTrendy></SummerTrendy>
        <BestDeal :products="bestdeal"></BestDeal>
        <ExportQuality></ExportQuality>
        <PremiumExports></PremiumExports>
        <DealOfTheDay></DealOfTheDay>
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
        
        
    },
    mounted()
    {
       
    }
    
}
</script>
<style scoped>

</style>