import axios from 'axios';
import baseURL from './baseURL';
import toastr from 'toastr';
axios.defaults.baseURL = baseURL;

export const wishlist =  {
    state: {
        wishlistItems: [],
    },
    getters: {
        Get_Compare_Items(state)
        {
            return state.compareItems;
        },
        Total_Compare_Items(state)
        {
            return state.compareItems.length;
        },
    },
    actions: {
        AddToWishList(context, item)
        {
            context.commit("AddToWishList", item)
        },
        RemoveWishListItem(context, id)
        {
            context.commit("RemoveWishListItem", id)
        },
    },
    mutations: {
        AddToWishList(state, item)
        {
            let compareItems = state.compareItems;
            let bool = compareItems.some(data=> data.id == item.id);
            if(bool)
            {
                toastr.error('Item already added to compare list');
            }
            else{
                compareItems.push({...item});
            }
        },
        RemoveWishListItem(state, id)
        {
            let compareItems = state.compareItems;
            let index = compareItems.findIndex(data=> data.id == id);
            compareItems.splice(index, 1);
        },
    }
};