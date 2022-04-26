import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate';
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage: [],
    cartItems: [],
    items: [
      {
        _id: 0,
        img: require("@/assets/1.png"),
        name: "Foodbox Classique",
        price: 20,
        color: "Blue",
        type: "T-shirt",
      },
      {
        _id: 1,
        img: require("@/assets/2.png"),
        name: "Foodbox Végan",
        price: 45,
        color: "Blue",
        type: "Sweat",
      },
      {
        _id: 2,
        img: require("@/assets/3.png"),
        name: "Foodbox Halal",
        price: 30,
        color: "blue",
        type: "Jogging",
      },
    ],
  },
  // plugins: [createPersistedState()],
  getters: {

    itemsNumber(state) {
      // Cart Component
      let x = 0;
      state.cartItems.forEach((element, i) => {
        x += element.qty;
      });
      return x;
    },
    totalPrice(state) {
      // Cart Component
      let x = 0;

      state.cartItems.forEach((element, i) => {
        x += element.price * element.qty;
      });
      return x;
      // if (state.cartItems.length != 0){
      //  return state.cartItems.reduce((a, b) => {
      //    return (b.price == null ) ? a : a + b.price
      //  }, 0)
      // }
    },
    infoLength(state) {
      // Info Component
      if (state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1);
      }
    },
  },
  mutations: {
    async GetItems(state) {
      try{
        await axios
        .get(`https://bds-app.herokuapp.com/api/users/items`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response && response.data) {
            state.items = response.data;
          } else {
            return state.items = [
              {
                _id: 0,
                img: require("@/assets/1.png"),
                name: "Foodbox Classique",
                price: 20,
                color: "Blue",
                type: "T-shirt",
              },
              {
                _id: 1,
                img: require("@/assets/2.png"),
                name: "Foodbox Végan",
                price: 45,
                color: "Blue",
                type: "Sweat",
              },
              {
                _id: 2,
                img: require("@/assets/3.png"),
                name: "Foodbox Halal",
                price: 30,
                color: "blue",
                type: "Jogging",
              },
            ];
          }
        });
      }catch (e) {
    
        return state.items = [
          {
            _id: 0,
            img: require("@/assets/1.png"),
            name: "Foodbox Classique",
            price: 20,
            color: "Blue",
            type: "T-shirt",
          },
          {
            _id: 1,
            img: require("@/assets/2.png"),
            name: "Foodbox Végan",
            price: 45,
            color: "Blue",
            type: "Sweat",
          },
          {
            _id: 2,
            img: require("@/assets/3.png"),
            name: "Foodbox Halal",
            price: 30,
            color: "blue",
            type: "Jogging",
          },
        ];
      }
   
    },
    inCart(state, n) {
      // Cart Component

      const isId = (element) => element._id === n._id;
      let z = state.cartItems.findIndex(isId);
      if (z != -1) {
        return (state.cartItems[z].qty += 1);
      } else {
        return state.cartItems.push({ ...n, qty: 1 });
      }

      // return state.cartItems.push(n)
    },
    outCart(state, n) {
      // Cart Component

      const isID = (element) => element._id === n;
      let z = state.cartItems.findIndex(isID);

      if (z != -1 && state.cartItems[z].qty > 1) {
        return (state.cartItems[z].qty -= 1);
      } else {
        return state.cartItems.splice(z, 1);
      }

      // let index = state.cartItems.findIndex(x => x.id === n)
      // return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) {
      // Info Component
      return state.infoPage.push(n);
    },
  },
});
