<template>
    <div>
        <footer>
            <div class="row border border-muted border-end-0 border-start-0 border-top-0">
                <div class="col-lg-4 col-md-12 col-12">
                    <img src="assets/images/logo/adada.png" alt="logo" height="50">
                    <p class="text-start">
                        Hi, we have just started. Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We aimed to serve our customers with international products and at the best price.
                    </p>
                </div>
                <div class="col-lg-5 col-md-12 col-12 footer-menu-box">
                    <div class="row">
                        <div class="col-4 footer-menu-col">
                            <ul>
                                <li>
                                    <router-link to="/information"><b>Information</b></router-link>
                                </li>
                                <li><router-link to="/about-us">About Live Shopping</router-link></li>
                                <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                                <li><router-link to="/terms">Terms & Conditions</router-link></li>
                                <li><router-link to="/return-policy">Return Refunds</router-link></li>
                                <li><router-link to="/faqs">FAQ</router-link></li>
                            </ul>
                        </div>
                        <div class="col-4 footer-menu-col">
                            <ul>
                                <li>
                                    <router-link to="/my-account"><b>MY ACCOUNT</b></router-link>
                                </li>
                                <li><router-link to="/dashboard">Dashboard</router-link></li>
                                <li><router-link to="/wishlist">Wishlist</router-link></li>
                                <li><router-link to="/special-products">Special Products</router-link></li>
                                <li><router-link to="/gift-voucher">Gift Voucher</router-link></li>
                                <li><router-link to="/delivery-shipping">Delivery & Shipping</router-link></li>
                            </ul>
                        </div>
                        <div class="col-4 footer-menu-col">
                            <ul>
                                <li>
                                    <router-link to="/services"><b>SERVICES</b></router-link>
                                </li>
                                <li><router-link to="/contact-us">Contact us</router-link></li>
                                <li><router-link to="/site-map">Sitemap</router-link></li>
                                <li><router-link to="/support">Support</router-link></li>
                                <li><router-link to="/help">Help</router-link></li>
                                <li><router-link to="/store-location">Store Location</router-link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-12">
                    <div class="footer-menu-col mt-5">
                        <form action="javascript: void(0)" >
                            <div class="input-group d-flex">
                                <input type="text" placeholder="Search...."
                                v-model="query" @keyup.enter="searchProduct">
                                <button @click.prevent="searchProduct" class="text-center p-1"><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </form>
                        <div class="contact-info mt-2">
                            <div class="row">
                                <div class="col-12">
                                    <router-link to="#" class="text-dark text-decoration-none">
                                        <div class="d-flex align-items-center">
                                            <div class="p-3"><i class="fa fa-location-arrow"></i></div>
                                            <div class="">
                                                <p class="" style="text-align: start; font-size: 13px;">
                                                    15th Floor, Rupayan Trade Center, Banglamotor, Dhaka- 1000
                                                </p>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link to="#" class="text-dark text-decoration-none">
                                        <div class="d-flex align-items-center">
                                            <div class="p-3"><i class="fa fa-phone"></i></div>
                                            <div class="">
                                                <p class="" style="text-align: start; font-size: 13px;">
                                                    Phone:+8801911 111 566
                                                </p>
                                            </div>
                                        </div>
                                    </router-link>
                                    <router-link to="#" class="text-dark text-decoration-none">
                                        <div class="d-flex align-items-center">
                                            <div class="p-3"><i class="fa fa-envelope"></i></div>
                                            <div class="">
                                                <p class="" style="text-align: start; font-size: 13px;">
                                                    contact@liveshopping.com
                                                </p>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="social-icons text-center border border-muted border-end-0 border-start-0 border-top-0 pt-3 pb-3">
                <a href="https://www.facebook.com" target="_blank" class="m-1 btn btn-circle btn-primary text-light">
                    <span>
                        <i class="fab fa-facebook-f"></i>
                    </span>
                </a>
                <a href="https://www.twitter.com" target="_blank" class="m-1 btn btn-circle btn-info text-light">
                    <span>
                        <i class="fab fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.pinterest.com" target="_blank" class="m-1 btn btn-circle btn-danger text-light">
                    <span>
                        <i class="fab fa-pinterest-p"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com" target="_blank" class="m-1 btn btn-circle btn-primary text-light">
                    <span>
                        <i class="fab fa-linkedin-in"></i>
                    </span>
                </a>
                <a href="https://www.telegram.com" target="_blank" class="m-1 btn btn-circle btn-info text-light">
                    <span>
                        <i class="fab fa-telegram-plane"></i>
                    </span>
                </a>
            </div>
            <div class="copyright pt-3 text-lg-start text-md-center text-center">
                <p style="font-size: 13px;">
                    Live Shopping © 2022 All right reserved. Design & Developed by <router-link to="#" class="text-dark text-decoration-none">
                        Advert Limited
                    </router-link>
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            query: '',
        }
    },
    methods: {
        searchProduct()
        {
            if(this.query !== ''){
                this.$store.dispatch("productSearch", this.query)
                this.$router.push('/product-search?query='+this.query);
                this.query = "";
            }
        }
    }
}
</script>
<style>
    
</style>