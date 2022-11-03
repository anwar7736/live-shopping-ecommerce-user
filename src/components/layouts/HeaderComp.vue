<template>
    <div class="wrapper">
                <!-- header start  -->
                <header>
            <!-- topbar start  -->
                <div class="topbar-main col-12 container-fluid">
                    <div class="topbar d-flex justify-content-between">
                        <ul class="topbar-left p-0 mb-0">
                            <li><router-link to="/return-policy" class="top-l-link">Return</router-link></li>
                            <li><router-link to="/terms" class="top-l-link">Terms</router-link></li>
                            <li><router-link to="/faqs" class="top-l-link">FAQS</router-link></li>
                        </ul>
                        <div class="topbar-right">
                            <ul class="topbar-right me-1 mb-0">
                                <li><router-link to="/compare-products" class="top-r-link"><i class="fas fa-random"></i><span class="badge badge-pill">1</span> <span class="compare">Compare</span></router-link></li>
                                <li><router-link to="/wishlist" class="top-r-link"><i class="far fa-heart"></i><span class="badge badge-pill">1</span> <span class="compare">Wishlist</span></router-link></li>
                                <li v-if="!loggedStatus"><router-link to="/login-register" class="top-r-link" >Login/Register</router-link></li>
                                <li v-if="loggedStatus"><a href="#" class="top-r-link" @click.prevent="logout">Logout</a></li>
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
                                <span><span>0</span> items</span>
                            </router-link>
                        </li>
                        <li class="cart-sm d-block d-md-block d-lg-none">
                            <router-link to="/bag-item-list">
                                <i class="fas fa-shopping-bag"></i><span class="badge badge-pill">1</span>
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
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Polo Shirt</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Shirt</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Panjabi</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Blazer</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Flash Sale</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Pants</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Shoes</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="#" class="nav-link">Watches</router-link>
                                    </li>
                                </ul>
                            </div>
                        <!-- dropdown  -->
                        </li>
                        <li class="search-box ps-lg-3">
                            <input type="text" class="search-input" placeholder="Search For Products">
                            <div class="dpdown d-none d-md-none d-lg-block">
                                <button class="search-dp ps-3 pe-3">
                                    <span class="pe-3">Search Category</span> <i class="fas fa-angle-down"></i>
                                </button>
                                    <!-- dropdown  -->
                                        <div class="search-cat-dp">
                                            <ul>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Blazer</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Flash Sale</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Panjabi</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Pants</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Polo Shirt</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Shirt</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Shoes</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#"> class="nav-link"T-Shirt</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Voucher Card</router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="#" class="nav-link">Watches</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- dropdown  -->
                            </div>
                            <button class="search-submit" type="submit">
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
                        <form action="" class="mobile-sidebar-form">
                            <input type="text" class="msf-input" placeholder="Search For Products">
                            <button type="submit"><i class="fas fa-search"></i></button>
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
                                <li class="nav-item m-menu-active"><router-link to="#" class="nav-link">Home</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Shop</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Flash Sell</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">About Us</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Contact Us</router-link></li>
                            </ul>
                            <ul class="navbar-nav m-cat-dp" style="display: none;">
                                <li class="nav-item m-cat-active"><router-link to="#" class="nav-link">Polo shirt</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">T-shirt</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Panjabi</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Blazer</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Pants</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Shoes</router-link></li>
                                <li class="nav-item"><router-link to="#" class="nav-link">Watches</router-link></li>
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
                                <router-link to="/" class="nav-link active">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="shop.html" class="nav-link">Shop</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">Flash Sell</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">About Us</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="#" class="nav-link">Contact Us</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="cart d-none d-md-none d-lg-block">
                        <router-link to="#">
                            <span class="menu-cart-icon"><i class="fas fa-shopping-cart"></i></span>
                            <span><span>0</span> items</span>
                        </router-link>
                    </li>
                    <li class="cart-sm d-block d-md-block d-lg-none">
                        <router-link to="#">
                            <i class="fas fa-shopping-bag"></i><span class="badge badge-pill">1</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           
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
                })
                .catch(err=>{
                    console.log(err);
                });
            }
        },
        
    },
    computed: {
        loggedStatus()
        {
            return this.$store.getters.GET_AUTH_STATUS;
        }
    }
}
</script>

