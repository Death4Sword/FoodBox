

import axios from "axios"

// APPELLE D'API STANDARD DE LOGIN PAR FETCH RETOURNE UN JSON
export default {
  data: function() {
    return {
      auth: localStorage.getItem("token") ? true : false,
    };
  },
  methods: {
   async Login(email, password) {
      try {
        await axios.get(`https://bds-app.herokuapp.com/api/login`, {
          body:JSON.stringify({
            email: email,
            password: password,
          }),
        }).then(response => {
          localStorage.setItem("token",response.token)
          localStorage.setItem("email",response.data.email)
          this.auth = true;
          return response.data 
        })
      } catch (e) {
        this.errors.push(e);
      }
    },
    async Create(
      username,
      gender,
      email,
      password,
      phone
      ) {
      try {
        await axios.get(`https://bds-app.herokuapp.com/api/users`, {
          body:JSON.stringify({
            username: username,
            gender: gender,
            email: email,
            password: password,
            phone: phone,
          }),
        }).then(response => {
          localStorage.setItem("token",response.token)
          localStorage.setItem("email",response.data.email)
          this.auth = true;
          return response.data 
        })
      } catch (e) {
        this.errors.push(e);
      }
    },
    SignOut() {
      localStorage.clear();
      this.auth = false;
    },
    async GetUserDetail(id) {
      try {
        await axios.get(`https://bds-app.herokuapp.com/api/users/${id}`).then(response => {
          return response.data 
        })
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
