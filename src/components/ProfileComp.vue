<template lang="">
    <div>
        <link rel="stylesheet" href="assets/css/dashboard.css">

<section>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-10 account-menu p-3 d-md-block d-lg-block" id="account-sidemenu">
                <div class="col-12 dismiss-box">
                    <button class="dismiss btn btn-light d-md-none d-lg-none d-block" id="account-dismiss">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="menu-box-inner">
                    <div class="profile-details">
                        <div class="profile-image m-2">
                            <img src="assets/images/products/1.jpg" alt="">
                        </div>
                        <p class="name mt-2 text-muted">
                            <b>
                                {{user_info.first_name}} {{user_info.last_name}}
                            </b>
                        </p>
                    </div>
                <div class="d-flex justify-content-between">
                    <h5 class="title">My Account</h5>
                    
                </div>
                <hr>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/dashboard" class="nav-link"><b>Dashboard</b></router-link></li>
                    <li class="nav-item"><router-link to="/my-account" class="nav-link"><b>My Profile</b></router-link></li>
                    <li class="nav-item"><router-link to="/orders" class="nav-link"><b>Orders</b></router-link></li>
                    <li class="nav-item"><router-link to="/wishlist" class="nav-link"><b>Wishlist</b></router-link></li>
                    <li class="nav-item"><router-link to="#" class="nav-link"><b>Logout</b></router-link></li>
                </ul>
                </div>
            </div>
            <div class="col-lg-9 col-md-8 col-12 p-3 text-muted menu-details">
                <button class="d-block d-md-none d-lg-none btn btn-secondary sidebar" id="account-sidebar">
                    <i class="fas fa-arrow-right"></i>
                </button>
                <div class="card">
                  <div class="card-header d-flex justify-content-between p-2 pb-0">
                    <h5 class="title">Profile Information</h5>
                    <a href="#update_profile"><i class="fas fa-edit"></i> Edit Profile</a>
                  </div>
                  <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex align-item-center">
                                <div class="profile-image me-3">
                                    <img src="assets/images/products/1.jpg" alt="profile image">
                                </div>
                                <div class="profile-primary-details">
                                    <h5 class="text-muted"><b>{{user_info.first_name}} {{user_info.last_name}}</b></h5>
                                    <div class="varified text-primary">[<span>Verifed</span>]</div>
                                    <p>Joined liveshopping.com on {{user_info.created_at}}</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="contact-info">
                                        <h4><b>Contact Information</b></h4>
                                        <div class="">
                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="text-muted">E-mail</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.email}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="text-muted">Alternative E-mail</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.alt_number}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="text-muted">Phone Number</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.contact_number}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="text-muted">Telephone Number</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.contact_no}}</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        
                                    </div>
                                    <hr>
                                    <div class="address-info">
                                        <h4><b>Address Information</b></h4>
                                        <div class="border-0">
                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="text-muted">Street/Village</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.current_address}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="text-muted">Thana/Upzilla</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.custom_field_2}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="text-muted">District</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.custom_field_3}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" class="text-muted">Country</th>
                                                        <td>:</td>
                                                        <td scope="col">{{user_info.custom_field_4}}</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 border-lg-start" id="update_profile">
                                    <h4 class="text-muted">
                                        Update Your Information
                                    </h4>
                                    <form method="post" @submit.prevent="updateProfile">
                                        <div class="row">
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="first_name" placeholder="First Name" v-model="user_info.first_name">
                                            </div>
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="last_name" placeholder="Last Name" v-model="user_info.last_name">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" disabled class="form-control" name="email" placeholder="E-mail" v-model="user_info.email">
                                            </div>
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="alternative_email" placeholder="Alternative Email" v-model="user_info.alt_number">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="phone" placeholder="Phone Number" v-model="user_info.contact_number">
                                            </div>
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="tel_number" placeholder="Telephone Number" v-model="user_info.contact_no">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="village" placeholder="Street/Village" v-model="user_info.current_address">
                                            </div>
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="upzilla" placeholder="Thana/Upzilla" v-model="user_info.custom_field_2">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="village" placeholder="District/State" v-model="user_info.custom_field_3">
                                            </div>
                                            <div class="mb-3 col-lg-6 col-md-6 col-12">
                                                <input type="text" class="form-control" name="country" placeholder="Country" v-model="user_info.custom_field_4">
                                            </div>
                                        </div>
                                        
                                        <div class="mb-3">
                                          <label for="" class="form-label">Choose A Profile Pic</label>
                                          <input type="file" name="profile_pic" class="mb-3 form-control col-md-4 col-12" >
                                        </div>
                                        
                                        <button class="btn btn-success">Update Information</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>

        </div>
    </div>
</section>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user_info: {

            },
            errors: {},
        }
    },
    methods: {
        updateProfile()
        {
            this.$store.dispatch("PROFILE", this.user_info)
            .then(res=>{
                alert(res.message);
            })
            .catch(err=>{
                this.errors = err.response.data.errors;
            })
        }
    },
    created(){
       this.user_info = this.$store.getters.GET_AUTH_USER_INFO;  
    }
}
</script>
<style lang="">
    
</style>