<template>
  <!-- card response -->
  <div
    class="max-w-md xl:max-w-3xl mx-auto flex border-indigo-800 rounded-lg shadow-xl overflow-hidden"
  >
    <div
      class="hidden xl:block w-1/2 bg-center bg-cover"
      style="background-image: url('https://images.unsplash.com/photo-1595087873528-1fe582a3b302?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80');"
    ></div>
    <div class="w-full xl:w-1/2 p-8 bg-white">
      <form
        class="flex flex-col pt-3 md:pt-8 "
        onsubmit="event.preventDefault();"
      >
        <h1 class="font-bold text-3xl ">Login in your account</h1>
        <small
          >You do not have an account?
          <router-link
            to="/SignUp"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Sign Up
          </router-link>
        </small>
        <div class="flex flex-col pt-4">
          <label for="email" class="text-lg">Email</label>
          <input
            v-model="account.email"
            type="email"
            id="email"
            placeholder="PhilippusAureolus69@email.com"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>

        <div class="flex flex-col pt-4">
          <label for="password" class="text-lg">Password</label>
          <input
            v-model="account.password"
            type="password"
            id="password"
            placeholder="Password"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <input
          type="submit"
          value="LogIn"
          @click.prevent="login"
          class="rounded bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-teal-500 hover:to-indigo-500 text-white font-semibold p-2 mt-8 mb-6"
        />
        <hr />
        <div class="text-center px-4 py-2 m-2">
          <button class="mr-6" @click.prevent="google">
            <i
              class="fab fa-3x fa-google text-indigo-600 hover:text-blue-500"
            ></i>
          </button>
          <!-- <button class="">
            <i
              class="fab fa-3x fa-facebook text-blue-600 hover:text-indigo-600"
            ></i>
          </button> -->
        </div>
      </form>
      <div
        v-if="errores"
        class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p class="font-bold">Informational message</p>
        <!-- message of errors --> 
        <p class="text-sm">{{ errores }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/firebase/init";
import firebase from "firebase/app";
require("firebase/auth");

export default {
  data() {
    return {
      account: { email: "", password: "" },
      errores: "",
    };
  },
  name: "LogIn",
  methods: {
    login() {
      this.errores = "";
      if (this.account.email && this.account.password) {
        //Send Form
        /* login with email using firebase */
        firebase
          .auth()
          .signInWithEmailAndPassword(this.account.email, this.account.password)
          .then((user) => {
            this.account.email = "";
            this.account.password = "";
            console.log(user);
            this.$router.push({ name: "Dashboard" });
          })
          .catch((er) => {
            this.errores = er.message;
          });
        console.log("Good");
      } else {
        this.errores = "All fields are required";
      }
    },
    /* login with google using firebase */
    google() {
      console.log("google");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result.user);
          console.log("Good");
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          this.errores = error.message;
          console.log(error.message);
        });
    },
  },
};
</script>

<style></style>
