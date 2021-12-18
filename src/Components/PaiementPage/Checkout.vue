<template>
  <div class="form">
    <div class="form-l">
       <h4>Resumé</h4>
      <div class="row space" v-for="thing in cartContent" v-bind:key="thing._id">
        <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <img :src="thing.img" style="width: 90px" />
        </div>
        <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <h4>{{ thing.name }}</h4>
          <h6>{{ thing.price }}€</h6>
          <h6>x{{ thing.qty }}</h6>
        </div>
      </div>
      <h4>Total : {{ cartPrice }}€</h4>
    </div>
    
      <div class="card-container">
        <div ref="card"></div>
        <button v-on:click="purchase" class="button btn-lg">Payer</button>
      </div>
  </div>
</template>

<script>
//let stripe = Stripe(`${process.env.STRIPE_KEY}`),
/*global stripe*/
let stripe = Stripe(
    `pk_test_51IVxZmDiXDF9M1dYHIFVugXvComTJkwFmGdMiFj61v8dhQVAXkE8Pf4XcMYw16SEQ3s1xsDtR5pDGoTWMFDNOKY200nj8bgX71`
  ),
  elements = stripe.elements(),
  card = undefined;
export default {
  name: "card",
  data() {
    return {
      id: NaN,
      addresses: [],
      select: 0,
      address: {},
    };
  },
  computed: {
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
    cartContent() {
      return this.$store.state.cartItems;
    },
  },
  mounted() {
    card = elements.create("card", {
      style: {
        base: {
          width:"100%",
          color: "#fff",
          fontWeight: "500",
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "16px",
          fontSmoothing: "antialiased",
          ":-webkit-autofill": {
            color: "#fce883",
          },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    
          //border: "1px solid #D8D8D8",
          //borderRadius: "4px",
          //color: "blue",
        },
      },
    });
    card.mount(this.$refs.card);
  },
  methods: {
    purchase() {
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          self.hasCardErrors = true;
          self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
          return;
        }
        console.log(result.token);
      });
      /**if (this.address.street == undefined) {
        this.$emit("choose");
        return;
      }
      let self = this;
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          self.hasCardErrors = true;
          self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
          return;
        }
        self.newToken(result.token.id);
        if (self.getAddress != "") {
          if (self.getAddress.street == self.address.street) {
            self.$http
              .post(`${process.env.DEV_URL}/api/addresses/${self.id}`, {
                address: self.address,
              })
              .then((response) => {
                if (response.data == "ok") self.$emit("next");
              })
              .catch((e) => {
                console.error(e);
              });
          } else {
            self.newAddress(self.address);
            self.$emit("next");
          }
        } else {
          self.newAddress(self.address);
          self.$emit("next");
        }
        // Access the token with result.token
      });**/
    },
  },
  /**created(){
    axios.post('')
      .then(response => {
        this.id = response.data
      })
      .catch(error => {
        console.log(error);
      });
  }**/
};
</script>
<style lang="scss">
.form {
  width: 100%;
  height: auto;
  display: inline-block;
}
.form-l {
  float: left;
  width: 50%;
  margin-left: 100px;
}
.card-container {
  width: 30%;
  display: inline-block;
  position: relative;
  margin-right: 100px;
  float: right !important;
  .button {
    float: right;
    width: 100%;
    border-radius: 6px;
    margin-right: 10px;
    margin-top: 40px;
    margin-left: 170px;
    transition: all ease 0.2s;
    color:  #2649a1;
    font-size: 17px;
    &:hover {
      color: white;
      background: #2649a1;
    }
  }
}
.space{
  padding: 5px;
}
</style>
;