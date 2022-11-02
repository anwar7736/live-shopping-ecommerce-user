import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const auth =  {
    state: {
        auth_status: false,
        auth_token: '',
        auth_user_info: {
            name: '',
            email: '',
            avatar: '',
        },
        user_list : [],
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
        },
        GET_USER_LIST(state)
        {
            return state.user_list;
        }
    },
    actions: {
        LOGIN(context, loginData)
        {
            //axios.defaults.headers.common['Authorization'] = "Bearer " + context.getter.GET_AUTH_TOKEN;

            return new Promise((resolve, reject)=>{
                axios.post("", loginData)
                .then(res=>{
                    resolve(res.data);
                    context.commit("SET_AUTH_INFO", res.data);
                })
                .catch(err=>{
                    reject(err.data);
                })
            });
        },
        REGISTER(context, registerData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("", registerData)
                .then(res=>{
                    resolve(res.data);
                    context.commit("SET_AUTH_INFO", res.data);
                })
                .catch(err=>{
                    reject(err.data);
                })
            });
        },
        USER_LIST(context)
        {
            return new Promise((resolve, reject)=>{
                    axios.get("/posts")
                    .then(res=>{
                        resolve(res);
                        context.commit("SET_USER_LIST", res.data);
                    })
                    .catch(err=>{
                        reject(err);
                    })
                
            });
        }
    },
    mutations: {
        SET_AUTH_INFO(state, data)
        {
            state.auth_status = true,
            state.auth_token = data.access_token;
            state.auth_user_info = data.user_info;
        },
        SET_USER_LIST(state, data)
        {
            state.user_list = data;
        }
    }
};
