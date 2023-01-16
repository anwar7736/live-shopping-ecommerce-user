import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes';
import store from './store';
import productView from '@/components/layouts/ProductView.vue';
import sliderView from '@/components/layouts/SliderView.vue';
import quickView from '@/components/layouts/QuickViewModal';
import checkout from '@/components/layouts/CheckoutModal';
import loading from '@/components/layouts/LoadingComp';
import buy from '@/components/layouts/BuyModal';
const app = createApp(App);

app.component('product-view', productView);
app.component('slider-view', sliderView);
app.component('quick-view', quickView);
app.component('checkout-view', checkout);
app.component('loading-view', loading);
app.component('buy-view', buy);

app.use(router);
app.use(store);
app.mount('#app');
