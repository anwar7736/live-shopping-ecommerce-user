import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const product =  {
    actions: {
        HomeSlider()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/home_slider_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        SummerTrendy()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/summer_trendy_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        BestDeal()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/best_deal_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        ExportQuality()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/export_quality_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        PremiumExports()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/premium_export_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        DealsOfTheDay()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/deal_oftheday_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        FlashSell()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/flash_sell_product")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        ShopProductList()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/shop_product_list")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        }, 
        ProductFilterByCategory(context, id)
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_filter_by_category/" + id)
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
