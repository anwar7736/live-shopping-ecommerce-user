import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const category =  {
    actions: {
        CATEGORY_LIST()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/category_list")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        Category_Image(context, type)
        {
            return new Promise((resolve, reject)=>{
                axios.get("/category_image/"+type)
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
