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
import Profile from '../components/ProfileComp';


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
        path: '/product-details', 
        component:ProductDetails,
        meta: {
            title : 'Product Details',
        },
    }, 
    {
        path: '/wishlist', 
        component:WishList,
        meta: {
            title : 'Wishlist',
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
            guest: true,
            title : 'Contact Us',
        },
    },
    {
        path: '/about-us', 
        component:AboutUs, 
        meta: {
            guest: true,
            title : 'About Us',
        },
    },
    {
        path: '/login-register', 
        component:LoginRegister, 
        meta: {
            guest: true,
            title : 'Login or Register',
        },
    },
    {
        path: '/change-password', 
        component:ChangePassword,
        meta: {
            auth: true,
            title : 'Change Password',
        },
    },
    {
        path: '/forget-password', 
        component:ForgetPassword, 
        meta: {
            guest: true,
            title : 'Forget Password',
        },
    },
    {
        path: '/email-verify', 
        component:EmailVerify, 
        meta: {
            guest: true,
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
});

const auth_status = store.getters.GET_AUTH_STATUS;

router.beforeEach((to, from, next) => {
    console.log(to,from);
    if (to.meta.auth && !auth_status) {
        return {
          path: '/login',
        }
    }
    else if (to.meta.guest && auth_status) {
        return {
          path: '/',
        }
      }
      else next();
      document.title = `Live-Shopping - ${to.meta.title}`

  });

export default router;