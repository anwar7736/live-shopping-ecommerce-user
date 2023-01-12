<template>
    <div class="wrapper">
                <!-- header start  -->
                <header>
            <!-- topbar start  -->
                <div class="topbar-main col-12 container">
                    <div class="topbar d-flex justify-content-between">
                        <ul class="topbar-left p-0 mb-0">
                            <li><router-link to="/return-policy" class="top-l-link">Return</router-link></li>
                            <li><router-link to="/terms" class="top-l-link">Terms</router-link></li>
                            <li><router-link to="/faqs" class="top-l-link">FAQS</router-link></li>
                        </ul>
                        <div class="topbar-right">
                            <ul class="topbar-right me-1 mb-0">
                                <li><router-link to="/compare-products" class="top-r-link"><i class="fas fa-random"></i><span class="badge badge-pill">{{compareItemCount}}</span> <span class="compare">Compare</span></router-link></li>
                                <li><router-link to="/wishlist" class="top-r-link"><i class="far fa-heart"></i><span class="badge badge-pill">{{wishlistItemCount}}</span> <span class="compare">Wishlist</span></router-link></li>
                                <li v-if="!loggedStatus"><router-link to="/login-register" class="top-r-link d-none" >Login/Register</router-link></li>
                                <li v-if="loggedStatus"><a href="#" class="top-r-link d-none" @click.prevent="logout">Logout</a></li>
                            </ul>
                        </div>
                     </div>
                </div>
            <!-- topbar end  -->
            <!-- navbar start  -->
            <div class="manubar">
                <div class="container-fluid">
                    <ul class="navbar-inner col-12 mb-0">
                        <li class="menu-bar d-block d-md-block d-lg-none">
                            <button id="menu-toggler" class="menu-toggler">
                                <i class="fas fa-bars"></i> <span>MENU</span>
                            </button>
                        </li>
                        <li class="navbar-brand">
                            <router-link to="/">
                                <img src="assets/images/logo/adada.png" alt="Logo" width="80">
                            </router-link>
                        </li>
                        <li class="menu-items-container d-none d-md-none d-lg-block">
                            <ul class="d-flex menu-items">
                                <li class="nav-item">
                                    <router-link exact active-class="active" to="/" class="nav-link">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link exact active-class="active" to="/shop" class="nav-link">Shop</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link exact active-class="active" to="/flash-sell" class="nav-link">Flash Sell</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link exact active-class="active" to="about-us" class="nav-link">About Us</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link exact active-class="active" to="contact-us" class="nav-link">Contact Us</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="cart d-none d-md-none d-lg-block">
                            <router-link to="/cart-list">
                                <span class="menu-cart-icon"><i class="fas fa-shopping-cart"></i></span>
                                <span><span>{{cartItemCount}}</span> items</span>
                            </router-link>
                        </li>
                        <li class="cart-sm d-block d-md-block d-lg-none">
                            <router-link to="/cart-list">
                                <i class="fas fa-shopping-bag"></i><span class="badge badge-pill">{{cartItemCount}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- navbar end  -->
            <div class="search-bar">
                <div class="container-fluid">
                    <ul class="searchbar-inner col-12">
                        <li class="dpdown cat-dp-main d-none d-md-none d-lg-block">
                            <button class="cat-dp">
                                <span><i class="fas fa-bars"></i> <span style="font-size: 14px; font-weight: 600;">BROWSE CATEGORIES</span></span><i class="fas fa-angle-down"></i>
                            </button>
                            <!-- dropdown  -->
                            <div class="search-cat-dp-hover">
                                <ul>
                                    <li class="nav-item" v-for="cat in categories" :key="cat.id">
                                        <router-link :to="'/product-category?id='+ cat.id" class="nav-link" @click.prevent="categoryFilter(cat.id)">{{cat.name}}</router-link>
                                    </li>
                                </ul>
                            </div>
                        <!-- dropdown  -->
                        </li>
                        <li class="search-box ps-lg-3">
                            <input type="text" class="search-input" v-model="query" @keyup.enter="searchProduct" placeholder="Search product here">
                            <div class="dpdown d-none d-md-none d-lg-block">
                                <button class="search-dp ps-3 pe-3">
                                    <span class="pe-3">SELECT CATEGORY</span> <i class="fas fa-angle-down"></i>
                                </button>
                                    <!-- dropdown  -->
                                        <div class="search-cat-dp" @mouseout="hoverOut">
                                            <ul>
                                                <li class="nav-item" v-for="cat in categories" :key="cat.id">
                                                    <router-link :to="'/product-category?id='+ cat.id" class="nav-link" @click.prevent="categoryFilter(cat.id)">
                                                        {{cat.name}}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- dropdown  -->
                            </div>
                            <button class="search-submit" type="button" @click.prevent="searchProduct">
                                <i class="fas fa-search"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- sidebar start  -->
            <div class="sidebar-main">
                <div class="m-row">
                    <div class="mobile-sidebar collapsed-left-open">
                        <form action="javascript: void(0)" class="mobile-sidebar-form">
                            <input type="text" class="msf-input" v-model="query" @keyup.enter="searchProduct"  placeholder="Search product here">
                            <button type="submit" @click.prevent="searchProduct"><i class="fas fa-search"></i></button>
                        </form>
                        <div class="m-sidebar-tab-container col-12">
                            <div class="row mst-row col-12 m-0 p-0">
                                <div class="col-6 mst-item mst-active" id="mst-menu">
                                    menu
                                </div>
                                <div class="col-6 mst-item" id="mst-category">
                                    Categories
                                </div>  
                            </div>
                            <ul class="navbar-nav m-menu-dp">
                                <li class="nav-item m-menu-active"><router-link to="/" class="nav-link">Home</router-link></li>
                                <li class="nav-item"><router-link to="/shop" class="nav-link">Shop</router-link></li>
                                <li class="nav-item"><router-link to="/flash-sell" class="nav-link">Flash Sell</router-link></li>
                                <li class="nav-item"><router-link to="/about-us" class="nav-link">About Us</router-link></li>
                                <li class="nav-item"><router-link to="/contact-us" class="nav-link">Contact Us</router-link></li>
                            </ul>
                            <ul class="navbar-nav m-cat-dp" style="display: none;">
                                <li class="nav-item" v-for="cat in categories" :key="cat.id">
                                    <router-link :to="'/product-category?id='+ cat.id" class="nav-link">
                                        {{cat.name}}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="overlay-sidebar"></div>
                </div>
            </div>
        <!-- sidebar end  -->
        </header>
        <!-- header end  -->
        <div class="manubar" id="navbar">
            <div class="container">
                <ul class="navbar-inner col-12 mb-0">
                    <li class="menu-bar d-block d-md-block d-lg-none">
                        <button id="menu-toggler" class="menu-toggler">
                            <i class="fas fa-bars"></i> <span>MENU</span>
                        </button>
                    </li>
                    <li class="navbar-brand">
                        <router-link to="/">
                            <img src="assets/images/logo/adada.png" alt="Logo" width="80">
                        </router-link>
                    </li>
                    <li class="menu-items-container d-none d-md-none d-lg-block">
                        <ul class="d-flex menu-items">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link active">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/shop" class="nav-link">Shop</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/flash-sell" class="nav-link">Flash Sell</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about-us" class="nav-link">About Us</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="cart d-none d-md-none d-lg-block">
                        <router-link to="/cart-list">
                            <span class="menu-cart-icon"><i class="fas fa-shopping-cart"></i></span>
                            <span><span>{{cartItemCount}}</span> items</span>
                        </router-link>
                    </li>
                    <li class="cart-sm d-block d-md-block d-lg-none">
                        <router-link to="/cart-list">
                            <i class="fas fa-shopping-bag"></i><span class="badge badge-pill">{{cartItemCount}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import mixins from '../../Mixins';
import toastr from 'toastr';
export default {
    mixins: [mixins],
    data(){
        return {
           hover: "search-cat-dp-hover",
           cat: "search-cat-dp",
           categories: {},
           query: '',
        }
    },
    methods: {
        logout()
        {
            if(confirm('Do you want to logout?'))
            {
                this.$store.dispatch('LOGOUT')
                .then(res=>{
                    console.log(res);
                    this.$router.push('/');
                    toastr.success('Logout success');
                })
                .catch(err=>{
                    console.log(err);
                });
            }
        },
        searchProduct()
        {
            if(this.query !== ''){
                this.$store.dispatch("productSearch", this.query)
                this.$router.push('/product-search?query='+this.query);
                this.query = "";
            }

        }

       
    },
    computed: {
        loggedStatus()
        {
            return this.$store.getters.GET_AUTH_STATUS;
        },
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        compareItemCount()
        {
            return this.$store.getters.Total_Compare_Items;
        }, 
        wishlistItemCount()
        {
            return this.$store.getters.Total_Wishlist_Items;
        },
    },
    created()
    {
        this.$store.dispatch("CATEGORY_LIST")
        .then(res=>{
            this.categories = res.categories;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

