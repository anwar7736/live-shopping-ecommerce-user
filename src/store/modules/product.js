import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const product =  {
    state: {
        searchItems: [],
        categoryItems: [],
    },
    getters: {
        Get_Search_Items(state)
        {
            return state.searchItems;
        },
        Get_Category_Items(state)
        {
            return state.categoryItems;
        },
    },
    actions: {
        HomeSlider()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/home_slider_image")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        MAX_PRICE()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/max_product_price")
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
                axios.get("/product_filter_by_category/" + id)
                .then(res=>{
                    context.commit("categoryProducts", res.data);
                })
                .catch(err=>{
                    console.log(err);
                })
        }, 
        ProductFilterById(context, id)
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_filter_by_id/" + id)
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },       
        ProductFilterByColorOrSize(context, id)
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_filter_by_color_or_size/" + id)
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },        
        LocationWiseStock(context, item)
        {
            let id = item.product_id;
            let size_id = item.size;
            return new Promise((resolve, reject)=>{
                axios.get("/location_wise_stock/" + id + "/" + size_id)
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        productSortByType(context, type)
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_sort_by_type/" + type)
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },
        productFilter(context, data)
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_filter/" + data.color + "/" + data.size + "/" + data.amount.from + "/" + data.amount.to)
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },      
        productSearch(context, query)
        {
                axios.get("/product_search/" + query)
                .then(res=>{
                    context.commit("productSearch", res.data);
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        productColors()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_colors")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },          
        productSizesAndColors()
        {
            return new Promise((resolve, reject)=>{
                axios.get("/product_sizes_and_colors")
                .then(res=>{
                    resolve(res.data);
                })
                .catch(err=>{
                    reject(err);
                })
            });
        },  
    },
    mutations: {
        productSearch(state, data)
        {
            state.searchItems = data;
        },
        
        categoryProducts(state, data)
        {
            state.categoryItems = data;
        },

    },
};
