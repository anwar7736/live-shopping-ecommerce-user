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
            else if(qty > 10)
            {
                toastr.options.positionClass = 'toast-top-center';
                toastr.error('Quantity will be less than or equal 10!');
            }
            else if(item.type === 'variable' && size !== '' && type != '')
            {
                let product_id = item.id;
                store.dispatch("GetStockQty", {product_id, size})
                .then(res=>{
                    if(res.qty < qty)
                    {
                        toastr.options.positionClass = 'toast-top-center';
                        toastr.error('Product stock '+Math.round(res.qty)+ ' pcs available!');
                    }
                    else {
                        store.dispatch("AddToCart", {item, variations, size, qty});
                        toastr.success('Item added to cart list');
                    }
                })
                .catch();
                
            }
            else if(item.type === 'single')
            {
                let product_id = item.id;
                store.dispatch("GetStockQty", {product_id, size:''})
                .then(res=>{
                    if(res.qty < qty)
                    {
                        if(res.qty < 1)
                        {
                            toastr.options.positionClass = 'toast-top-center';
                            toastr.error('Product out of stock!');
                        }
                        else {
                            toastr.options.positionClass = 'toast-top-center';
                            toastr.error('Product stock '+Math.round(res.qty)+ ' pcs available!');
                        }
                    }
                    else {
                        store.dispatch("AddToCart", {item, variations, size, qty});
                        toastr.success('Item added to cart list');
                    }
                })
                .catch();
                
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
            if(item.qty > 10)
            {
                toastr.options.positionClass = 'toast-top-center';
                toastr.error('Quantity will be less than or equal 10!');
            }   
           else {
                store.dispatch("UpdateQty", item);
           }
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