<template>
  <div class="container-flex">
    <nav class="navbar navbar-light">
      <div class="dropdown d-xl-none d-lg-none mr-auto">
        <img
          src="https://png.icons8.com/windows/32/000000/menu.png"
          data-toggle="dropdown"
          data-target="#navd"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <div class="dropdown-menu hb" aria-labelledby="navd">
          <router-link class="dropdown-item" to="/">Accueil</router-link>
          <router-link class="dropdown-item" to="/contact">Contactez-nous !</router-link
          >
        </div>
      </div>
      <!--Logo-->
      <a class="navbar-brand py-0 pl-5">
        <router-link to="/"><img src="@/assets/logo-BDS.png" width="50" height="50" /></router-link>
      </a>
      <!--Header navigation-->
      <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
        <router-link class="pl-5" to="/">Commander</router-link>

        <router-link class="pl-5" to="/">A propos</router-link>

        <router-link class="pl-5" to="/contact">Contactez-nous !</router-link>
      </span>

      <p class="navbar-item ml-auto"></p>
      <div class="searc d-none d-xl-block d-lg-block pr-3">
        <input
          type="search"
          class="search"
          v-model="search"
          @change="Searchx"
        />
        <!---------   INPUT -->
      </div>

      <div class="user" v-if="!auth">
        <h5
          style="cursor: pointer; color: white;"
          data-toggle="modal"
          data-target="#userModal"
        >
          Connexion
        </h5>
      </div>
      <div class="user" v-if="auth">
        <h5
          style="cursor: pointer; color: white;"
          data-toggle="modal"
          data-target="#userModal"
        >
          Deconnexion
        </h5>
      </div>
      <div class="bag" @click="openCart">
        <img class="pb-1" src="@/assets/shopping-cart.png" />
        <span class="mb-3" v-if="this.bagItemscount > 0">{{
          bagItemscount
        }}</span>
      </div>
    </nav>
    <!--User Modal-->
    <div
      class="modal fade"
      id="userModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              style="outline-style:none;"
              aria-label="Close"
            >
              <span>x</span>
            </button>
            <form class="px-3 py-2">
              <div class="form-group" v-if="!SignMode">
                <label for="exampleDropdownFormFirstname">username :</label>
                <input
                  id="exampleDropdownFormFirstname"
                  class="form-control"
                  v-model="username"
                  type="text"
                  placeholder="Firstname"
                />
              </div>
              <div class="form-group" v-if="!SignMode">
                <label for="exampleDropdownFormLastname">gender :</label>
                <input
                  id="exampleDropdownFormLastname"
                  class="form-control"
                  v-model="gender"
                  type="text"
                  placeholder="gender"
                />
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormEmail1">email : </label>
                <input
                  id="exampleDropdownFormEmail1"
                  class="form-control"
                  v-model="email"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1">Mot de passe :</label>
                <input
                  id="exampleDropdownFormPassword1"
                  class="form-control"
                  v-model="password"
                  type="password"
                  placeholder="password"
                />
              </div>
                <div class="form-group" v-if="!SignMode">
                <label for="exampleDropdownFormPassword1">Telephone :</label>
                <input
                  id="exampleDropdownFormPassword1"
                  class="form-control"
                  v-model="phone"
                  type="number"
                  placeholder="phone"
                />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label" for="dropdownCheck">
                  Se souvenir de moi
                </label>
              </div>
              <span v-if="errorVisible">{{ errorText }}</span>
              <button class="btn-xl btn-success mt-3" v-on:click="Submit()">
                <span v-if="SignMode">Connexion</span
                ><span v-if="!SignMode">Inscrivez-vous</span>
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <a class="dropdown-item" href="#">Mot de passe oublié ? </a>
            <a
              class="dropdown-item text-right"
              href="#"
              v-if="SignMode"
              v-on:click="ChangeMode()"
              >Inscrivez-vous!</a
            >
            <a
              class="dropdown-item text-right"
              href="#"
              v-if="!SignMode"
              v-on:click="ChangeMode()"
              >Connecter vous!</a
            >
          </div>
        </div>
      </div>
    </div>
    <!--Cart Component-->
    <Cart ref="cartMove" />
  </div>
</template>

<script>
import Cart from "@/Components/Cart.vue";
import Sign from "@/mixins/Sign.js";
export default {
  name: "Header",
  data: function() {
    return {
      search: "",
    };
  },
  components: {
    Cart,
  },
  mixins: [Sign],
  computed: {
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
  },
  methods: {
    openCart() {
      this.$refs.cartMove.cartON();
    },
    Searchx(e) {
      let x = document.querySelectorAll(".ITEMCARD");
      if (this.search.toLowerCase().length > 1) {
        x.forEach((element) => {
          if (
            element.innerHTML.toLowerCase().includes(this.search.toLowerCase())
          ) {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        });
      } else {
        x.forEach((element) => {
          element.style.display = "block";
        });
      }
    },
  },
};
</script>

<style>
nav {
  z-index: 100;
}
.navbar {
  border-bottom: 1px solid #dcdcdc;
  background-color: #2649a1;
}

.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}
.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: white;
}

.navbar-item.bc a:hover,
.navbar-item.bc a:active {
  color: #ffd700;
}
.btn-sm {
  border-radius: 6px;
}

.search {
  outline: none;
  border: 1px #f8f8f8;
  background: #ededed url("../assets/search.png") no-repeat 5px center;
  padding: 5px 8px 0px 26px;
  width: 150px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  margin-right: 10px;
}

.search:focus {
  border-radius: 6px;
  width: 160px;
  border: solid 1px #ccc;
  background-color: #fff;
  border-color: #98ccfd;
  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  backface-visibility: hidden;
  perspective: 1000;
}

form .btn-xl.btn-success.mt-3 {
  position: relative;
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.bag span {
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  position: absolute;
  font-size: 15px;
  line-height: 1;
  padding: 2px 3px 3px 3px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: -9px;
  bottom: 1rem;
}

.bag img {
  cursor: pointer;
  width: 30px;
  height: auto;
}

.user {
  margin-right: 20px;
  padding-top: 10px;
}

.user:hover {
  text-decoration: underline;
}
</style>
