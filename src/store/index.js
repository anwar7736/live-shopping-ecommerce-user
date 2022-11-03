import { createStore } from 'vuex';
import {auth} from './modules/auth';
import {contact} from './modules/contact';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    modules: {
        auth,
        contact,
    },
    plugins: [createPersistedState({
        paths: ['auth']
    })
],
    
});
