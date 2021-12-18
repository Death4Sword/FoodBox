<template>
  <div>
    <div :class="cClass">
      <div class="cart-menu">
        <h1 class="size text-center">Panier</h1>
        <hr>

        <transition name="fade">
          <div v-if="this.cartContent.length === 0" class="text-center font-italic">
            Votre panier est vide
          </div>
        </transition>

        <transition-group name="fade">
          <div class="row" v-for="thing in cartContent" v-bind:key="thing._id">
            <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <img :src="thing.img" style="width: 90px; border-radius:6px;">
            </div>
            <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <h4 class="size-product">{{ thing.name}}</h4>
              <h6>{{ thing.price }}€</h6>  <h6>x{{ thing.qty }}</h6>
            </div>
            <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
              <span class="remove-btn" @click="removeThing(thing._id)">Supprimer</span>
            </div>
          </div>
        </transition-group >

        <hr v-if="this.cartContent.length !== 0">
        <div class="row justify-content-between" style="background:#2649A1;padding:10px 10px 10px 10px" v-if="this.cartPrice != undefined">
          <div class="flex-column pl-3">
            <h4>Total</h4>
          </div>
          <div class="flex-column pr-3">
            <h4>{{ cartPrice }}€</h4>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-secondary btn-lg btn-block color">
       <router-link to="/basket">validez</router-link>
    </button>
    </div>
    <div :class="modalClass" @click="cartON"></div>
    
  </div>
</template>

<script>


export default {
  name: 'Cart',
  data() {
    return {
      cClass: 'cart',
      modalClass: 'modal off'
    }
  },
  computed:{
    cartContent(){
      return this.$store.state.cartItems
    },
    cartPrice() {
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    cartON() {
      if(this.cClass === 'cart on'){
        this.cClass = 'cart'
        this.modalClass = 'modal off'
      }else{
        this.cClass = 'cart on'
        this.modalClass = 'modal'
      }
    },
    removeThing(id){
      this.$store.commit('outCart',id)
  }
}
}
</script>

<style scoped>
/* Modal Overlay */
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal.off {
  display: none;
}
/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
/* Cart Body */
.cart {
  border-radius: 6px;
  position: fixed;
  margin-right: 0px;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  z-index:1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}
.cart.on{
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart-menu{
  color: #000;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
border-color: #bdbdbd;
}

.row{
  margin-top: 10px;
  margin-bottom: 10px;
}


.remove-btn{
  background-color: #bdbdbd;
  border-radius: 50%;
  width: 18px;
  content: url('../assets/multiply.png')
}

.remove-btn:hover {
  background-color: grey;
}
.size{
  font-size: 28px;
  padding-top : 20px;
  padding-bottom: 10px;
  margin-top: 0!important;
}
.size-product{
  font-size: 18px;
}
h1{
  margin: 0!important;
}
.color {
  border-radius: 6px!important;
  
}

</style>
