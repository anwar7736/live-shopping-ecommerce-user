<template>
    <div>
        <HomeMain></HomeMain>
        <SummerTrendy></SummerTrendy>
        <BestDeal></BestDeal>
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
            
        }
    },
    components: {
        HomeMain,
        SummerTrendy,
        BestDeal,
        ExportQuality,
        PremiumExports,
        DealOfTheDay,


    }
    
}
</script>
<style scoped>

</style>