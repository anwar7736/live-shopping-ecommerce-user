import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const delivery =  {
    actions: {
        DeliverySection()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/get_delivery_section")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        }, 
    },

};
