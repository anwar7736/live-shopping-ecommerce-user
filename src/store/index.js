import { createStore } from 'vuex';
import {auth} from './modules/auth';
import {contact} from './modules/contact';
import {category} from './modules/category';
import {product} from './modules/product';
import {cart} from './modules/cart';
import {compare} from './modules/compare';
import {wishlist} from './modules/wishlist';
import {delivery} from './modules/delivery';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    modules: {
        auth,
        contact,
        category,
        product,
        cart,
        compare,
        wishlist,
        delivery
    },
    plugins: [createPersistedState({
        paths: ['auth', 'cart', 'compare', 'wishlist', 'product']
    })
],
    
});
