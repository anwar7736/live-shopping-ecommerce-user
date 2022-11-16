<template lang="">
    <div>
        <section>
            <link rel="stylesheet" href="assets/lightbox/magnific-popup.css"/>
            <link rel="stylesheet" href="assets/css/product.css"/>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 product-image-col row pt-3">
                        <div class="image single-product-images">
                            <div class="discount-tag d-none">
                                -48%
                            </div>
                            <div id="product-single" class="carousel slide" data-bs-ride="carousel">
                            
                                <div class="carousel-inner" role="listbox">
                                    <a href="assets/images/gift-card/1000tk.jpg" class="carousel-item active">
                                        <img :src="product.image_url" @error="product.image_url='assets/images/products/default-image.jpg'" alt="Image" class="w-100 d-block"/> 
                                    </a>
                                    <a href="assets/images/gift-card/2000tk.jpg" class="carousel-item">
                                        <img :src="product.image_url" @error="product.image_url='assets/images/products/default-image.jpg'" alt="Image" class="w-100 d-block"/>
                                    </a>
                                    <a href="assets/images/gift-card/200tk.jpg" class="carousel-item">
                                        <img :src="product.image_url" @error="product.image_url='assets/images/products/default-image.jpg'" alt="Image" class="w-100 d-block"/>
                                    </a>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#product-single" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#product-single" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        

                        
                    </div>
                    <div class="modal-product-details col-lg-7 col-md-6 col-12 pt-3">
                        <nav aria-label="breadcrumb" class="pt-0">
                            <ol class="breadcrumb">
                              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                              <li class="breadcrumb-item"><a href="#">{{product.category}}</a></li>
                              <li class="breadcrumb-item active" aria-current="page">{{product.product}}</li>
                            </ol>
                          </nav>
                        <a href="product.html" class="text-decoration-none text-dark">
                            <h3>{{product.product}}</h3>
                        </a>
                        <h6 class="price pt-3">
                            <del class="text-muted">{{product.sell_price_inc_tax}}৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">{{product.default_sell_price}}৳</span>
                        </h6>
                        <p class="text-sm" v-html="product.description">
                        </p>
                        <p class="text-sm pt-4">
                            Contact us at any time:
                        </p>
                        <p class="text-sm pt-2">
                            +8801 403 111 999
                        </p>
                        <div class="quantity-buy d-flex">
                            <div class="quantity">
                                <button class="cart-qty-minus" id="dec" type="button" value="-">-</button>
                                <input type="text" name="qty" id="qty"  minlength="1" value="1" class="input-text qty" />
                                <button class="cart-qty-plus" type="button" id="inc" value="+">+</button>
                                
                            </div>
                            <button data-bs-toggle="modal" data-bs-target="#buy-to-cart" class="btn" @click="AddToCart(product)">Buy</button>
                        </div>
                         <!-- Checkout modal  -->
                         <checkout :cartItems="cartItems"></checkout>
                        <div class="products-options mt-4 d-lg-flex">
                            <a href="#" class="text-decoration-none text-dark me-3" @click.prevent="addToCompareList(product)">
                                <b><i class="fas fa-random"></i> Compare</b>
                            </a>
                            <a href="#" class="text-decoration-none text-dark me-3" @click.prevent="AddToWishList(product)">
                                <b><i class="far fa-heart"></i> Add to Wishlist</b>
                            </a>
                            <a href="#" class="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#size-guide">
                                <b><i class="fas fa-ruler"></i> Size Guide</b>
                            </a>
                        </div>
                        <hr/>
                        <p><b>SKU:</b> {{product.sku}}</p>
                        <p><b>Category: </b> {{product.category}}</p>
                        <p><b>Tags: </b>  polo shirt, Sky Blue</p>
                        <p><b>Share: </b> 
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-telegram-plane"></i>
                            </a> 
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
            <div class="container-fluid">
                <div class="tab-box m-auto text-center col-12 d-lg-flex d-md-none d-lg-block d-none">
                    <div class="accordion discription m-auto">
                        <a href="#actab1" class="ac-btn">
                            <p>Discription</p>
                        </a>
                            
                    </div>

                    <div class="accordion discription m-auto">
                        
                        <a href="#actab2" class="ac-btn">
                            <p>ADDITIONAL INFORMATION</p>
                        </a>
                    </div>
                    <div class="accordion discription m-auto">
                        
                        <a href="#actab3" class="ac-btn">
                            <p>REVIEWS (0)</p>
                        </a>
                        
                    </div>
                    <div class="accordion discription m-auto">
                        
                        <a href="#actab4" class="ac-btn ">
                            <p>SHIPPING & DELIVERY</p>
                        </a>
                    </div>
                </div>
                <!-- for Desktop tabs -->
                <div class="container d-none d-lg-block d-md-none">
                    
                    <div id="actab1" class="tab-content text-start">
                        <ul>
                            <li>Soft and Comfortable</li>
                            <li>Glossy Fabrications</li>
                            <li>Short Sleeves</li>
                            <li>Polo neck</li>
                        </ul>
                      </div>
                    <div id="actab2" class="tab-content text-start">
                        <div class="col-12">
                            <table class="table">        
                                <section class="product-des">

                                <thead>
                                    <tr>
                                        <th scope="col">Color</th>
                                        <td scope="col" class="text-end">Black</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Fabric</th>
                                        <td scope="col" class="text-end">China fabric</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Fittings</th>
                                        <td scope="col" class="text-end">Slim Fit</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">GSM</th>
                                        <td scope="col" class="text-end">200+</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Product Type</th>
                                        <td scope="col" class="text-end"><a href="shop.html" class="text-decoration-none text-dark">Polo Shirt</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Size</th>
                                        <td scope="col" class="text-end">M, L, XL, XXL</td>
                                    </tr>
                                </thead>
                            </section>
                            </table>
                        
                        </div>
                        
                      </div>
                    <div id="actab3" class="tab-content text-start">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <h4 class="title">
                                    <b>
                                        REVIEWS
                                    </b>
                                </h4>
                                <p>
                                    There are no reviews yet.
                                </p>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <h6 class="title"><b>
                                    BE THE FIRST TO REVIEW “CHINA LUXURY POLO SHIRT”
                                </b></h6>
                                <p>
                                    You must be logged in to post a review.
                                </p>
                            </div>
                        </div>
                      </div>
                    <div id="actab4" class="tab-content text-start">
                        <div class="row justify-content-center align-items-center g-2">
                            <div class="col-lg-6 col-12">
                                <h5 class="title"><b>
                                    DELIVERY & SHIPPING PROCESS
                                </b></h5>
                                <p>We deliver via REDX and SUNDARBAN Courier for the cash-on-delivery process. Here the system is pretty easier as follows -</p>
                                <ul>
                                    <li>-Choose your product first</li>
                                    <li>-Click on "Buy Now."</li>
                                    <li>-Fill up your name, phone number, and delivery address,</li>
                                    <li>-Click on place order, That's all!</li>
                                </ul>
                                <p>
                                    Now wait for the call from our end. In short, one of our telesales executives will call you to confirm the order for shipping. Meanwhile, you must pay the delivery charge via Live Shopping's only bkash merchant number 01911111566.
                                </p>
                                <p>
                                    NOTE: DO NOT PAY ANYWHERE ELSE.
                                </p>
                                <p>
                                    After the shipment of your order, our telesales executive will call you again, text you, mail you, or messenger you with your invoice number, including shipping details.
                                </p>
                                <p>
                                    We know you don't like to wait, right? Don't worry, you don't need to wait more than 48 hours for Dhaka and 72 hours across the country.
                                </p>
                            </div>
                            <div class="col-lg-3 col-12">
                                <img src="assets/images/others/redx_courier_logo-400x195.png" alt="" class="col-12">
                            </div>
                            <div class="col-lg-3 col-12">
                                <img src="assets/images/others/sundarban_courier_logo-300x300.png" alt="" class="col-12">
                            </div>
                        </div>
                      </div>
                    
                    
                    
                </div>
                <!-- for Desktop tabs -->
                <!-- for mobile view  -->
                <div class="dec-acc d-block d-md-block d-lg-none">
                    <div class="accordion discription m-auto">
                                    
                                
                        <a href="#acmtab1" class="ac-btn d-flex justify-content-between text-start active align-items-start">
                            <p>DESCRIPTION</p>
                            <span class="d-lg-none d-md-block d-block"><i class="fas fa-angle-down"></i></span>
                        </a>
                        <div id="acmtab1" class="tab-content2 text-start ps-3">
                            <ul>
                                <li>Soft and Comfortable</li>
                                <li>Glossy Fabrications</li>
                                <li>Short Sleeves</li>
                                <li>Polo neck</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="accordion discription m-auto">
                            
                        
                        <a href="#acmtab2" class="ac-btn d-flex justify-content-between text-start align-items-start">
                            <p>ADDITIONAL INFORMATION</p>
                            <span class="d-lg-none d-md-block d-block"><i class="fas fa-angle-down"></i></span>
                        </a>
                        <div id="acmtab2" class="tab-content2 text-start ps-3">
                            <div class="col-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Color</th>
                                            <td scope="col" class="text-end">Black</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Fabric</th>
                                            <td scope="col" class="text-end">China fabric</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Fittings</th>
                                            <td scope="col" class="text-end">Slim Fit</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">GSM</th>
                                            <td scope="col" class="text-end">200+</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Product Type</th>
                                            <td scope="col" class="text-end"><a href="shop.html" class="text-decoration-none text-dark">Polo Shirt</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Size</th>
                                            <td scope="col" class="text-end">M, L, XL, XXL</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion discription m-auto">
                        
                        
                        <a href="#acmtab3" class="ac-btn d-flex justify-content-between align-items-start">
                            <p>REVIEWS (0)</p>
                            <span class="d-lg-none d-md-block d-block"><i class="fas fa-angle-down"></i></span>
                        </a>
                        <div id="acmtab3" class="tab-content2 text-start ps-3">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <h4 class="title">
                                        <b>
                                            REVIEWS
                                        </b>
                                    </h4>
                                    <p>
                                        There are no reviews yet.
                                    </p>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <h6 class="title"><b>
                                        BE THE FIRST TO REVIEW “CHINA LUXURY POLO SHIRT”
                                    </b></h6>
                                    <p>
                                        You must be logged in to post a review.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="accordion discription m-auto">
                        
                    
                        <a href="#acmtab4" class="ac-btn d-flex justify-content-between align-items-start">
                            <p>SHIPPING & DELIVERY</p>
                            <span class="d-lg-none d-md-block d-block"><i class="fas fa-angle-down"></i></span>
                        </a>
                        <div id="acmtab4" class="tab-content2 text-start ps-3">
                            <div class="row justify-content-center align-items-center g-2">
                                <div class="col-lg-6 col-12">
                                    <h5 class="title"><b>
                                        DELIVERY & SHIPPING PROCESS
                                    </b></h5>
                                    <p>We deliver via REDX and SUNDARBAN Courier for the cash-on-delivery process. Here the system is pretty easier as follows -</p>
                                    <ul>
                                        <li>-Choose your product first</li>
                                        <li>-Click on "Buy Now."</li>
                                        <li>-Fill up your name, phone number, and delivery address,</li>
                                        <li>-Click on place order, That's all!</li>
                                    </ul>
                                    <p>
                                        Now wait for the call from our end. In short, one of our telesales executives will call you to confirm the order for shipping. Meanwhile, you must pay the delivery charge via Live Shopping's only bkash merchant number 01911111566.
                                    </p>
                                    <p>
                                        NOTE: DO NOT PAY ANYWHERE ELSE.
                                    </p>
                                    <p>
                                        After the shipment of your order, our telesales executive will call you again, text you, mail you, or messenger you with your invoice number, including shipping details.
                                    </p>
                                    <p>
                                        We know you don't like to wait, right? Don't worry, you don't need to wait more than 48 hours for Dhaka and 72 hours across the country.
                                    </p>
                                </div>
                                <div class="col-lg-3 col-12">
                                    <img src="assets/images/others/redx_courier_logo-400x195.png" alt="" class="col-12">
                                </div>
                                <div class="col-lg-3 col-12">
                                    <img src="assets/images/others/sundarban_courier_logo-300x300.png" alt="" class="col-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
                <!-- for mobile view  -->
                
                
            </div>
       

        <!-- Recently view  -->
        <hr/>
        <section>
            <div class="container">
                <div class="owl-carousel recently-view">
                    <div class="product p-2">
                        <div class="discount-tag d-none">
                            -48%
                        </div>
                        
                        <div class="images">
                            <a href="#">
                                <img src="assets/images/products/2.jpg" alt="Image" class="main-image">
                            </a>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" >
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li title="Add To Wishlist">
                                        <a href="#" class="compare">
                                            <i class="far fa-heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product-details text-center pt-2 ps-2">

                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Exclusive Mens Polo Shirts</a>
                            <div class="price">
                                <del class="text-muted">850.00৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">750.00৳</span>
                            </div>
                            <p class="product-details-p" style="display: none;">
                                Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We have just started! We aimed to serve our customers with international products at a competitive price range. We deliver premium quality and 100% QC pass products. Live Shopping means Exact Shopping
                            </p>
                            <a href="#">
                                <div class="button m-auto text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                            </div>
                            </a>
                        </div>
                    </div>
                    <div class="product p-2">
                        <div class="discount-tag d-none">
                            -48%
                        </div>
                        
                        <div class="images">
                            <a href="#">
                                <img src="assets/images/products/2.jpg" alt="Image" class="main-image">
                            </a>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" >
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li title="Add To Wishlist">
                                        <a href="#" class="compare">
                                            <i class="far fa-heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product-details text-center pt-2 ps-2">

                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Exclusive Mens Polo Shirts</a>
                            <div class="price">
                                <del class="text-muted">850.00৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">750.00৳</span>
                            </div>
                            <p class="product-details-p" style="display: none;">
                                Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We have just started! We aimed to serve our customers with international products at a competitive price range. We deliver premium quality and 100% QC pass products. Live Shopping means Exact Shopping
                            </p>
                            <a href="#">
                                <div class="button m-auto text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                            </div>
                            </a>
                        </div>
                    </div>
                    <div class="product p-2">
                        <div class="discount-tag d-none">
                            -48%
                        </div>
                        
                        <div class="images">
                            <a href="#">
                                <img src="assets/images/products/2.jpg" alt="Image" class="main-image">
                            </a>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" >
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li title="Add To Wishlist">
                                        <a href="#" class="compare">
                                            <i class="far fa-heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product-details text-center pt-2 ps-2">

                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Exclusive Mens Polo Shirts</a>
                            <div class="price">
                                <del class="text-muted">850.00৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">750.00৳</span>
                            </div>
                            <p class="product-details-p" style="display: none;">
                                Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We have just started! We aimed to serve our customers with international products at a competitive price range. We deliver premium quality and 100% QC pass products. Live Shopping means Exact Shopping
                            </p>
                            <a href="#">
                                <div class="button m-auto text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                            </div>
                            </a>
                        </div>
                    </div>
                    <div class="product p-2">
                        <div class="discount-tag d-none">
                            -48%
                        </div>
                        
                        <div class="images">
                            <a href="#">
                                <img src="assets/images/products/2.jpg" alt="Image" class="main-image">
                            </a>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" >
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li title="Add To Wishlist">
                                        <a href="#" class="compare">
                                            <i class="far fa-heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product-details text-center pt-2 ps-2">

                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Exclusive Mens Polo Shirts</a>
                            <div class="price">
                                <del class="text-muted">850.00৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">750.00৳</span>
                            </div>
                            <p class="product-details-p" style="display: none;">
                                Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We have just started! We aimed to serve our customers with international products at a competitive price range. We deliver premium quality and 100% QC pass products. Live Shopping means Exact Shopping
                            </p>
                            <a href="#">
                                <div class="button m-auto text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                            </div>
                            </a>
                        </div>
                    </div>
                    <div class="product p-2">
                        <div class="discount-tag d-none">
                            -48%
                        </div>
                        
                        <div class="images">
                            <a href="#">
                                <img src="assets/images/products/2.jpg" alt="Image" class="main-image">
                            </a>
                            <div class="options-pannel2">
                                <ul>
                                    <li class="d-lg-block d-md-block d-none" title="compare">
                                        <a href="#" class="compare" >
                                            <i class="fas fa-random"></i>
                                        </a>
                                    </li>
                                    <li title="Quick View" class="d-lg-block d-md-block d-none">
                                        <a href="#" class="compare" data-bs-toggle="modal" data-bs-target="#product-modal" >
                                            <i class="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li title="Add To Wishlist">
                                        <a href="#" class="compare">
                                            <i class="far fa-heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product-details text-center pt-2 ps-2">

                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Exclusive Mens Polo Shirts</a>
                            <div class="price">
                                <del class="text-muted">850.00৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">750.00৳</span>
                            </div>
                            <p class="product-details-p" style="display: none;">
                                Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We have just started! We aimed to serve our customers with international products at a competitive price range. We deliver premium quality and 100% QC pass products. Live Shopping means Exact Shopping
                            </p>
                            <a href="#">
                                <div class="button m-auto text-light">
                                    <p><b>
                                        BUY NOW
                                    </b></p>
                                    <span>
                                        <i class="fas fa-shopping-cart"></i>
                                    </span>
                                
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modal Body-->
        <div class="modal fade modal-lg" id="size-guide" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                                <h5 class="modal-title" id="modalTitleId">Size Guide</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="table-responsive">
                                <table class="table
                                table-hover
                                table-muted
                                align-middle
                                text-center">
                                    <thead class="table-light">
                                        <tr>
                                            <th>SIZE</th>
                                            <th>CHEST</th>
                                            <th>LENGTH</th>
                                        </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr class="" >
                                                <td scope="row">M</td>
                                                <td>38"-40"</td>
                                                <td>27’’</td>
                                            </tr>
                                            <tr class="">
                                                <td scope="row">L</td>
                                                <td>41"-42"</td>
                                                <td>28"</td>
                                            </tr>
                                            <tr class="">
                                                <td scope="row">XL</td>
                                                <td>43"-44"</td>
                                                <td>28.5"</td>
                                            </tr>
                                            <tr class="">
                                                <td scope="row">XXL</td>
                                                <td>44"-46"</td>
                                                <td>30"</td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        <!-- Modal Body -->
<!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
<div class="modal fade " id="product-modal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header border-0">
                <div class="d-flex justify-content-end position-absolute top-0 end-0 p-2">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
            <div class="modal-body product-popup">
                
                <div class="row">
                    <div class="modal-product-image col-6">
                        <div id="modal-product-image-inner" class="carousel slide" data-bs-ride="carousel"  data-bs-touch="true">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img src="assets/images/products/1.jpg" alt="Products" class="col-12">
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/images/products/1.jpg" alt="Products" class="col-12">
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/images/products/1.jpg" alt="Products" class="col-12">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#modal-product-image-inner" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#modal-product-image-inner" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <a href="product.html" class="btn col-12">View Details</a>
                    </div>
                    <div class="modal-product-details col-6 pt-3">
                        <a href="product.html" class="text-decoration-none text-dark">
                            <h3>Fashionable Men’s Polo Shirt</h3>
                        </a>
                        <h6 class="price pt-3">
                            <del class="text-muted">850.00৳</del><span class="ps-1" style="color: #ff7400; font-weight: bold;">750.00৳</span>
                        </h6>
                        <p class="text-sm">
                            Live Shopping is one of the fastest-growing trendy fashion lifestyle brands in Bangladesh. We have just started! We aimed to serve our customers with international products at a competitive price range. We deliver premium quality and 100% QC pass products. Live Shopping means Exact Shopping
                        </p>
                        <p class="text-sm pt-4">
                            Contact us at any time:
                        </p>
                        <p class="text-sm pt-2">
                            +8801 403 111 999
                        </p>
                        <div class="quantity-buy d-flex">
                            <div class="quantity">
                                <button class="cart-qty-minus" id="dec" type="button" value="-">-</button>
                                <input type="text" name="qty" id="qty"  maxlength="12" value="0" class="input-text qty" />
                                <button class="cart-qty-plus" type="button" id="inc" value="+">+</button>
                                
                            </div>
                            <button class="btn">Buy</button>
                        
                        </div>
                        <hr/>
                        <p><b>SKU:</b> 0613</p>
                        <p><b>Category: </b> Polo Shirt</p>
                        <p><b>Tags: </b>  polo shirt, Sky Blue</p>
                        <p><b>Share: </b> 
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="text-dark text-sm p-2 text-decoration-none">
                                <i class="fab fa-telegram-plane"></i>
                            </a> 
                        </p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>

</div>
</template>
<script>
import mixins from '../Mixins';
import checkout from './layouts/CheckoutModal';
export default {
    components: {
        checkout,
    },
    mixins: [mixins],
    data()
    {
        return {
            product : {},
        }
    },
    created()
    {
        let product_id = this.$route.query.id;
        this.$store.dispatch("ProductFilterById", product_id)
        .then(res=>{
            console.log(res);
            this.product = res;
        })
        .catch(err=>{
            console.log(err);
        })

    },
    computed: {
        cartItemCount()
        {
            return this.$store.getters.Total_Cart_Items;
        },
        cartItems()
        {
            return this.$store.getters.Get_Cart_Items;
        }
    },

}
</script>
<style lang="">
    
</style>