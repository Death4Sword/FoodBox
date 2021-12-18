
import AuthApi from "./AuthApi.js";
export default {
  data: function() {
    return {
      username: "test",
      gender: "wiwio",
      email: "email@email.email",
      password: "password",
      phone:"031679163",
      errorVisible: false,
      errorText: "",
      SignMode: true,
    };
  },
  methods: {
    SignIn() {
      this.Login(this.Email, this.Password).then((res) => {
        if (res.auth == true) {
          localStorage.setItem("id", res.body._id);
        } else {
          this.errorText = "Account not Found";
          this.errorVisible = true;
        }
      });
    },
    SignUp() {
      this.Create({
        username: this.username,
        gender: this.gender,
        email: this.email,
        password: this.password,
        phone: this.phone,
      }).then((res) => {
        if (res._id) {
          this.SignIn();
        } else {
          this.errorText = "Account already exist";
          this.errorVisible = true;
        }
      });
    },
    ChangeMode() {
      this.SignMode = !this.SignMode;
    },
    Submit() {
      if (this.SignMode) {
        this.SignIn();
      } else {
        this.SignUp();
      }
    },
  },

  mixins: [AuthApi],
};
