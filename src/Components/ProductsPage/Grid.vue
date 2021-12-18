<template>
  <div class="container grid">
    <div class="row justify-content-around">
      <div class="row col-6 pb-4 pr-1">
        <div class="dropdown">
          <a class="border btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trier par
            <span style="color:#f2be00;">{{ sortButton }}</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="sortDate">Date</a>
            <a class="dropdown-item" @click="sortPrice" >Price</a>
            <a class="dropdown-item" @click="sortTrend">Trending</a>
          </div>
        </div>
      </div>
      <div class="row col-6 flex-row-reverse">
        <div class="view-button">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATAGORIES</button>
            <div class="dropdown-menu" aria-labelledby="MenuLink">
              <a class="dropdown-item" @click="sortI('T-Shirt')">T-Shirt</a>
              <a class="dropdown-item" @click="sortI('Sweat')">Sweat</a>
              <a class="dropdown-item" @click="sortI('Jogging')">Jogging</a>
              <div class="dropdown-divider"></div>

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="reSet">Reset</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
          <div class="card-selector">
            <div class="card-body p-5">
              <div class="search-title">
                <h4>Catagories  +</h4>
                <br>
                <h6 @click="sortI('T-shirt')">T-Shirt</h6>
                <h6 @click="sortI('Sweat')">Sweat</h6>
                <h6 @click="sortI('Jogging')">Jogging</h6>
                <br><br><br>
                <br>
                <br><br>
                <h5>Prix :</h5>
                <slider @clicked="valueSlider"/>
              </div>

            </div>
          </div>
        </div>
        <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
          <div v-if="this.cards == 0" class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 style="margin-left:9rem;margin-right:9rem">Sorry, we can't find a product with this features</h4>
          </div>

            <Card :CardArray="slicedCards" />

          <!-- <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
            <button type="button" @click="incCardNumber" class="btn btn-outline-secondary btn-lg btn-block">Afficher plus +</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider from './slider.vue'
import Card from './Card.vue'
import axios from "axios"
export default {
  name:'Grid',
  components: {
    slider, Card
  },
  data() {
    return {
      cards: [],
      showCards: 6,
      sortButton: 'DEFAULT'
    }
  },
  created(){
    this.$store.commit("GetItems");
    this.cards = this.$store.state.items;
  },
  computed: {
    it(){
      this.$store.commit("GetItems",this.$store.state.items);
    // return this.$store.state.items;
    },
    slicedCards(){
      // return this.cards.slice(0, this.showCards)
      return this.cards;
    }
  },
  methods: {
    async GetItems() {
     await axios
        .get(`https://bds-app.herokuapp.com/api/users/items`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response && response.data) {
            return response.data;
          } else {
            return [];
          }
        });
    },
    incCardNumber() {
      return this.showCards += 6
    },
    valueSlider(value) {
      var x = value[0];
      var y = value[1];
      this.cards = this.it.filter((e)=> x < e.price && e.price < y)
    },
    sortDate() {
       this.cards.sort((a, b) => (a.name.length * 2)-(b.name.length * 4))
       return this.sortButton = 'DATE'
    },
    sortPrice() {
       this.cards.sort((a, b) => a.price-b.price)
       return this.sortButton = 'PRICE'
    },
    sortTrend() {
       this.cards.sort((a, b) => a.type.length-b.type.length)
       return this.sortButton = 'TRENDING'
    },
    sortI(name){
      this.cards = this.it.filter((e) => e.type.match(name) || e.color.match(name))
    },
    reSet() {
      return this.cards = this.it
    }
  }
  }
</script>

<style>
.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}
.dropdown-menu{
  border-radius:6px;
  background-color: #eee;
  color: #2c3539;
}

.dropdown-menu > a:hover{
  background-color: #dae0e5

}

.btn-outline-secondary {
  border-radius: 6px!important;
}
.border{
  border-radius: 6px!important;
}

/*search options*/

.card-selector {
  border-radius:6px;
  color: #DCDCDC;
  height: 40rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor:pointer
}
</style>
