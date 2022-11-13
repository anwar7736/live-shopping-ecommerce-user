import axios from 'axios';
import baseURL from './baseURL';
import toastr from 'toastr';
axios.defaults.baseURL = baseURL;

export const compare =  {
    state: {
        compareItems: [],
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
        AddToCompareList(context, item)
        {
            context.commit("AddToCompareList", item)
        },
        RemoveCompareItem(context, id)
        {
            context.commit("RemoveCompareItem", id)
        },
    },
    mutations: {
        AddToCompareList(state, item)
        {
            let compareItems = state.compareItems;
            let bool = compareItems.some(data=> data.id == item.id);
            if(bool)
            {
                toastr.error('Item already added to compare list');
            }
            else{
                compareItems.push({...item});
                toastr.success('Item added to compare list');
            }
        },
        RemoveCompareItem(state, id)
        {
            let compareItems = state.compareItems;
            let index = compareItems.findIndex(data=> data.id == id);
            compareItems.splice(index, 1);
        },
    }
};