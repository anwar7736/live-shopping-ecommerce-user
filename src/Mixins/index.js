import toastr from 'toastr';
import store from '../store';
export default{
    methods: {
        AddToWishList(item)
        {
            //store.dispatch("AddToWishList", item);
            toastr.success('Item added to wishlist ' +item.id);
        },
        AddToCart(item)
        {
            store.dispatch("AddToCart", item);
            toastr.success('Item added to cart list');
        },
        addToCompareList(item)
        {
            store.dispatch("AddToCompareList", item);
            toastr.success('Item added to compare list');
        },
        removeCompareItem(id)
        {
            store.dispatch("RemoveCompareItem", id);
            toastr.error('Item remove from compare list');
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