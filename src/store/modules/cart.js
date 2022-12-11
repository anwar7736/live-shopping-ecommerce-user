import axios from 'axios';
import baseURL from './baseURL';
axios.defaults.baseURL = baseURL;

export const cart =  {
    state: {
        cartItems: [],
    },
    getters: {
        Get_Cart_Items(state)
        {
            return state.cartItems;
        },
        Total_Cart_Items(state)
        {
            return state.cartItems.length;
        },
    },
    actions: {
        AddToCart(context, item)
        {
            context.commit("AddToCart", item);
        },
        IncreaseQty(context, id)
        {
            context.commit("IncreaseQty", id);
        },
        DecreaseQty(context, id)
        {
            context.commit("DecreaseQty", id);
        },
        UpdateQty(context, item)
        {
            context.commit("UpdateQty", item);
        },
        UpdateSize(context, item)
        {
            context.commit("UpdateSize", item);
        },
        RemoveItem(context, id)
        {
            context.commit("RemoveItem", id);
        },

        GetStockQty(context, item)
        {
            return new Promise((resolve, reject)=>{
                axios.get('get_stock_qty/'+item.product_id+"/"+item.size)
                .then(res=>{
                    resolve(res.data);
                    })
                .catch(err=>{
                    reject(err);
                })
            });
          
        },
        Checkout(context, customerData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("/checkout", {customer: customerData, items: context.state.cartItems})
                .then(res=>{
                    resolve(res.data);
                    if(res.data.success)
                    {
                        context.commit("Checkout");
                    }
                    })
                .catch(err=>{
                    reject(err);
                })
            });
          
        }
    },
    mutations: {
        AddToCart(state, item)
        {
            let qty = item.qty;
            let size = item.size;
            let variations = item.variations;
            let cartItems = state.cartItems;
            let bool = cartItems.some(data=> data.item.id == item.item.id);
            console.log(item.item);
            if(bool)
            {
                if(qty > 1)
                {
                    let index = cartItems.findIndex(data=> data.item.id == item.item.id);
                    cartItems[index]['qty'] += qty;
                }
                else{
                    let index = cartItems.findIndex(data=> data.item.id == item.item.id);
                    cartItems[index]['qty'] += 1;
                }
            }
            else if(!bool){
                if(qty > 1)
                {
                    cartItems.push({...item, variations, qty, size});
                }

                else {
                    cartItems.push({...item, variations, qty:1, size});
                }
            }
        },
        IncreaseQty(state, id)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.item.id == id);
            if(cartItems[index]['qty'] < 10)
            {
                cartItems[index]['qty'] += 1;
            }
   

        },
        DecreaseQty(state, id)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.item.id == id);
            if(cartItems[index]['qty'] > 1)
            {
                cartItems[index]['qty'] -= 1;
            }
        },
        UpdateQty(state, item)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.item.id == item.item.id);
            let newQty = Number(item.qty);
            cartItems[index]['qty'] = newQty;
            
        },
        UpdateSize(state, item)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.item.id == item.id);
            cartItems[index]['size'] = item.size;
        },
        RemoveItem(state, id)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.item.id == id);
            cartItems.splice(index, 1);
        },

        Checkout(state)
        {
            state.cartItems = [];
        }
    }
};