import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const contact =  {
    actions: {
        SENDMESSAGE(context, contactData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("/contact-us", contactData)
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        }
    },
};
