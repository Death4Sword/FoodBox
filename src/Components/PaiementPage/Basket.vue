<template>
  <div class="checkout">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-9">
          <h4>Votre Panier :</h4>
          <div
            v-if="this.cartContent.length === 0"
            class="text-center font-italic"
          >
            Votre panier est vide.
          </div>

          <div class="row space" v-for="thing in cartContent" v-bind:key="thing._id">
            <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <img :src="thing.img" style="width: 90px" />
            </div>
            <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <h4>{{ thing.name }}</h4>
              <h6>{{ thing.price }}€</h6>
              <h6>x{{ thing.qty }}</h6>
            </div>
            <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
              <span class="remove-btn" @click="removeThing(thing.id)">X</span>
            </div>
         
          </div>
        </div>
        <div
          class="row justify-content-between"
          style="padding: 10px 10px 10px 10px"
          v-if="this.cartPrice != undefined"
        >
          <div class="flex-column pl-3">
            <h4>Total :</h4>
          </div>
          <div class="flex-column pr-3">
            <h4>{{ cartPrice }}€</h4>
          </div>
          <hr />
          <div>
            <router-link class="pl-5" to="/checkout">
              <button type="button" class="button btn-b btn-lg">Validez</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cClass: "cart",
      modalClass: "modal off",
    };
  },
  computed: {
    cartContent() {
      return this.$store.state.cartItems;
    },
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    removeThing(id) {
      this.$store.commit("outCart", id);
    },
  },
};
</script>
<style scoped>
.btn-b {
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid grey !important;
}
.button:hover {
  color: #fff;
  background-color: #2649a1;
}
.button {
  width: 100%;
  border-radius: 6px;
  margin-right: 10px;
  margin-top: 40px;
  margin-left: 170px;
  transition: all ease 0.2s;
  color: #2649a1;
  font-size: 17px;
}
.space{
  padding: 5px;
}
</style>

