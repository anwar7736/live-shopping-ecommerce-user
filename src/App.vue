<template>
    <Header></Header>
        <router-view></router-view>
    <Common></Common>
    <Footer></Footer>
</template>
<script>
import Header from './components/layouts/HeaderComp';
import Common from './components/layouts/CommonComp';
import Footer from './components/layouts/FooterComp';
export default {
    data(){
        return {
            
        }
    },
    components: {
        Header, 
        Common,
        Footer,
    }
}
</script>
