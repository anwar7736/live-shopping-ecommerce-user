import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const auth =  {
    state: {
        auth_status: false,
        auth_token: '',
        auth_user_info: {}
    },
    getters: {
        GET_AUTH_STATUS(state)
        {
            return state.auth_status;
        },
        GET_AUTH_TOKEN(state)
        {
            return state.auth_token;
        },
        GET_AUTH_USER_INFO(state)
        {
            return state.auth_user_info;
        }
    },
    actions: {
        LOGIN(context, loginData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("/login", loginData)
                .then(res=>{
                    resolve(res.data);
                    context.commit("SET_AUTH_INFO", res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        LOGOUT(context)
        {
            axios.defaults.headers.common['Authorization'] = "Bearer " + context.state.auth_token;

            return new Promise((resolve, reject)=>{
                axios.get("/logout")
                .then(res=>{
                    resolve(res.data);
                    context.commit("SET_AUTH_LOGOUT");
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        REGISTER(context, registerData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("/register", registerData)
                .then(res=>{
                    resolve(res.data);
                    context.commit("SET_AUTH_INFO", res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        PROFILE(context, profileData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("/update-profile", profileData)
                .then(res=>{
                    resolve(res.data);
                    context.commit("UPDATE_AUTH_INFO", res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
    },
    mutations: {
        SET_AUTH_INFO(state, data)
        {
            state.auth_status = true;
            state.auth_token = data.access_token;
            state.auth_user_info = data.user;
        },
        SET_AUTH_LOGOUT(state)
        {
            state.auth_status = false;
            state.auth_token = '';
            state.auth_user_info = {};
        },
        UPDATE_AUTH_INFO(state, data)
        {
            state.auth_user_info = data.user;
        }

    }
};
