import apiConfigs from "@/configs/api.config.js";
const url = apiConfigs.urlApi;
const headers = {
  "Content-Type": "application/json",
};

// APPELLE D'API STANDARD DES UTILISATEURS PAR FETCH RETOURNE UN JSON
export default {
  methods: {
    Create(body) {
      return fetch(url + "/users", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    GetUsersDetail(id) {
      return fetch(url + "/users/id/" + id, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    GetUsers() {
      return fetch(url + "/users/all", {
        method: "GET",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    EditUser(id, body) {
      return fetch(url + "/users/idupdate/" + id, {
        method: "PUT",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    RemoveUser(id) {
      return fetch(url + "/users/idremove/" + id, {
        method: "DELETE",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },
  },
};
