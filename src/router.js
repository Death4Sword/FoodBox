import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue');
const Products = () => import('@/views/Products.vue');
const Contact = () => import('@/views/Contact.vue');
const Info = () => import('@/views/Info.vue');
const Basket = ()=> import('@/views/Cart.vue');
const Checkout =()=>import('@/views/Paiement.vue');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }, 
    {
      path: '/basket',
      name :'Basket',
      component: Basket
    },
    {
    path:'/checkout',
    name:'Checkout',
    component:Checkout
    }
  ],
  mode: 'history'
})
