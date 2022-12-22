import {createRouter, createWebHistory} from 'vue-router';
import store from '../store';
import Home from '../components/HomeComp';
import LoginRegister from '../components/auth/LoginRegisterComp';
import ChangePassword from '../components/auth/passwords/ChangePassword';
import ForgetPassword from '../components/auth/passwords/ForgetPassword';
import EmailVerify from '../components/auth/EmailVerify';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import ReturnPolicy from '../components/ReturnPolicy';
import Terms from '../components/TermsComp';
import FAQ from '../components/FAQComp';
import CartList from '../components/CartList';
import Compare from '../components/CompareComp';
import Shop from '../components/ShopComp';
import Flash from '../components/FlashSell';
import WishList from '../components/WishList';
import Dashboard from '../components/DashboardComp';
import PrivacyPolicy from '../components/PrivacyPolicy';
import ProductDetails from '../components/ProductDetails';
import ProductCategory from '../components/ProductCategory';
import Profile from '../components/ProfileComp';
import SearchProduct from '../components/SearchProducts';


import NotFound from '../components/404NotFound';


const routes = [
    {
        path: '/', 
        component:Home,
        meta: {
            title : 'Home',
        },
    },
    {
        path: '/my-account', 
        component:Profile,
        meta: {
            title : 'My Account',
            
          
        },
    },  
    {
        path: '/product-search', 
        component:SearchProduct,
        meta: {
            title : 'Searching Products',
        },
    }, 
    {
        path: '/product-details', 
        component:ProductDetails,
        meta: {
            title : 'Product Details',
        },
    }, 
    {
        path: '/product-category', 
        component:ProductCategory,
        meta: {
            title : 'Category wise product',
        },
    }, 
    {
        path: '/wishlist', 
        component:WishList,
        meta: {
            title: 'Wishlist',
            
        },
    }, 
    {
        path: '/privacy-policy', 
        component:PrivacyPolicy,
        meta: {
            title : 'Privacy Policy',
        },
    }, 
    {
        path: '/dashboard', 
        component:Dashboard,
        meta: {
            title : 'User Dashboard',
            
        },
    }, 
    {
        path: '/flash-sell', 
        component:Flash,
        meta: {
            title : 'Flash Sell',
        },
    }, 
    {
        path: '/shop', 
        component:Shop,
        meta: {
            title : 'Shop',
        },
    }, 
    {
        path: '/compare-products', 
        component:Compare,
        meta: {
            title : 'Compare Products',
        },
    },
    {
        path: '/cart-list', 
        component:CartList,
        meta: {
            title : 'Cart List',
        },
    },
    {
        path: '/terms', 
        component:Terms,
        meta: {
            title : 'Term & Conditions',
        },
    },
    {
        path: '/faqs', 
        component:FAQ,
        meta: {
            title : 'Freequent asked questions',
        },

    },
    {
        path: '/return-policy', 
        component:ReturnPolicy,
        meta: {
            title : 'Return Policy',
        },
    },
    {
        path: '/contact-us', 
        component:ContactUs, 
        meta: {
            title : 'Contact Us',
        },
    },
    {
        path: '/about-us', 
        component:AboutUs, 
        meta: {
            title : 'About Us',
        },
    },
    {
        path: '/login-register', 
        component:LoginRegister, 
        meta: {
            title: 'Login or Register',
        },
    },
    {
        path: '/change-password', 
        component:ChangePassword,
        meta: {
            title : 'Change Password',
        },
    },
    {
        path: '/forget-password', 
        component:ForgetPassword, 
        meta: {
            title : 'Forget Password',
        },
    },
    {
        path: '/email-verify', 
        component:EmailVerify, 
        meta: {
            title : 'Email Verify',
        },
    },
    {
        path: '/:pathMatch(.*)*', 
        component:NotFound,
        meta: {
            title : 'Page Not Found',
        }
    },
];

const router = new createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
      },
});

const auth_status = store.getters.GET_AUTH_STATUS;

router.beforeEach((to, from) => {
    console.log(to,from);
    if (to.meta.auth && !auth_status) {
        return {
          path: '/login-register',
        }
    }
    else if (to.meta.guest && auth_status) {
        return {
          path: '/',
        }
    }
    // document.title = `${to.meta.title} - Live Shopping`;
    document.title = `Live Shopping`;

  });

export default router;