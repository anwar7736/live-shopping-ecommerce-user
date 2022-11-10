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
        RemoveItem(context, id)
        {
            context.commit("RemoveItem", id);
        },

        Checkout(context, customerData)
        {
            return new Promise((resolve, reject)=>{
                axios.post("/checkout", {customer: customerData, items: context.state.cartItems})
                .then(res=>{
                    resolve(res.data);
                    context.commit("Checkout");
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
            let cartItems = state.cartItems;
            let bool = cartItems.some(data=> data.id == item.id);
            if(bool)
            {
                let index = cartItems.findIndex(data=> data.id == item.id);
                cartItems[index]['quantity'] += 1;
            }
            else{
                cartItems.push({...item, quantity:1});
            }
        },
        IncreaseQty(state, id)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.id == id);
            cartItems[index]['quantity'] += 1;

        },
        DecreaseQty(state, id)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.id == id);
            if(cartItems[index]['quantity'] > 1)
            {
                cartItems[index]['quantity'] -= 1;
            }
        },
        UpdateQty(state, item)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.id == item.id);
            cartItems[index]['quantity'] = item.quantity;
        },
        RemoveItem(state, id)
        {
            let cartItems = state.cartItems;
            let index = cartItems.findIndex(data=> data.id == id);
            cartItems.splice(index, 1);
        },

        Checkout(state)
        {
            state.cartItems = [];
        }
    }
};