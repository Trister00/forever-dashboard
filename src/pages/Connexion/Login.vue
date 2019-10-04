<template>
  <div class="content_login">
    <div class="content">
      <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-size-80">
          <div class="container">
            <md-card class="md-card-profile">
              <md-card-content>
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Login Name</label>
                      <md-input v-model="nom" type="text"></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Password</label>
                      <md-input v-model="password" type="password"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-button class="md-round md-default" @click="login">Login</md-button>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../api";

export default {
  name: "user-card",

  data() {
    return {
      nom: "",
      password: ""
    };
  },
  methods: {
    login() {
      let user = {
        login: this.nom,
        password: this.password
      };
      //this.$router.push("/");
      api
        .post("http://localhost:8000/admin_login", user)
        .then(res => {
          if (res.status == 200) {
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            this.$router.push("/");
          }
        })
        .catch(err => alert("Invalid credintials"));
    }
  }
};
</script>
<style >
.content_login {
  display: grid;
  place-items: center;
  height: 100vh;
  /* background-color: rgb(0, 0, 76); */
}
.container {
  float: left;
  left: 40px;
}
.img {
  float: left;
  top: 400px;
}
</style>
