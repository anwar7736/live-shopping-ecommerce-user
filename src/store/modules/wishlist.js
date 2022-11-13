import axios from 'axios';
import baseURL from './baseURL';
import toastr from 'toastr';
axios.defaults.baseURL = baseURL;

export const wishlist =  {
    state: {
        wishlistItems: [],
    },
    getters: {
        Get_Wishlist_Items(state)
        {
            return state.wishlistItems;
        },
        Total_Wishlist_Items(state)
        {
            return state.wishlistItems.length;
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
            let wishlistItems = state.wishlistItems;
            let bool = wishlistItems.some(data=> data.id == item.id);
            if(bool)
            {
                toastr.error('Item already added to wishlist');
            }
            else{
                wishlistItems.push({...item});
                toastr.success('Item added to wishlist');
            }
        },
        RemoveWishListItem(state, id)
        {
            let wishlistItems = state.wishlistItems;
            let index = wishlistItems.findIndex(data=> data.id == id);
            wishlistItems.splice(index, 1);
        },
    }
};