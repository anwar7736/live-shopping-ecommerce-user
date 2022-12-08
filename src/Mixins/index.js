import toastr from 'toastr';
import store from '../store';
export default{
    methods: {
        AddToWishList(item)
        {
            store.dispatch("AddToWishList", item)
           
        },
        AddToCart(item, variations = '', type = '', size = '', qty = 1)
        {
            if(item.type === 'variable' && size === '' && type != '')
            {
                toastr.error('Product size is required!');
            }

            else {
                store.dispatch("AddToCart", {item, variations, size, qty});
                toastr.success('Item added to cart list');
                
            }

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

        categoryFilter(id)
        {
            store.dispatch("ProductFilterByCategory", id);
        },

        
    }
}