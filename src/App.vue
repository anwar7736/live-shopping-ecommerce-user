<template>
    <Header></Header>
        <router-view></router-view>
    <Common></Common>
    <Footer></Footer>
        <checkout-view v-model="show"/>
        <!--checkout logo -->
        <buy-view @change="show = true"/> 
</template>
<script>

import Header from './components/layouts/HeaderComp';
import Common from './components/layouts/CommonComp';
import Footer from './components/layouts/FooterComp';
export default {
    data(){
        return {
            show: false,
        }
    },
    components: {
        Header, 
        Common,
        Footer,
    }
}
</script>
