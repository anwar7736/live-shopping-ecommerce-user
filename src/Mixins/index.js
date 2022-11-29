import toastr from 'toastr';
import store from '../store';
export default{
    methods: {
        AddToWishList(item)
        {
            store.dispatch("AddToWishList", item)
           
        },
        AddToCart(item, size = '', qty = 1)
        {
            store.dispatch("AddToCart", {item, size, qty});
            toastr.success('Item added to cart list');
        },
        addToCompareList(item)
        {
            store.dispatch("AddToCompareList", item);
        },
        removeCompareItem(id)
        {
            store.dispatch("RemoveCompareItem", id);
            toastr.error('Item remove from compare list');
        }, 
        removeWishlistItem(id)
        {
            store.dispatch("RemoveWishListItem", id);
            toastr.error('Item remove from wishlist');
        },
        increaseQty(id)
        {
            store.dispatch("IncreaseQty", id);
        },
        decreaseQty(id)
        {
            store.dispatch("DecreaseQty", id);
        },
        updateQty(item)
        {
            store.dispatch("UpdateQty", item);
        },
        removeItem(id)
        {
            store.dispatch("RemoveItem", id);
            toastr.error('Item remove from cart list');
        },

        
    }
}