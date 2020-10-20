<template>
  <div
    class="max-w-md xl:max-w-3xl mx-auto flex border-indigo-800 rounded-lg shadow-xl overflow-hidden"
  >
    <div
      class="hidden xl:block w-1/2 bg-center bg-cover"
      style="background-image: url('https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80');"
    ></div>
    <div class="w-full xl:w-1/2 p-8 bg-white">
      <form
        class="flex flex-col pt-3 md:pt-9 "
        onsubmit="event.preventDefault();"
      >
        <h1 class="font-bold text-3xl ">Sign Up your account</h1>
        <small
          >Have an account?
          <router-link
            to="/LogIn"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Log In
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

        <button
          type="submit"
          value="Register"
          @click.prevent="register"
          class="rounded bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold p-2 mt-8 mb-6"
        >
          Register
        </button>
        <hr />
        <div class="text-center px-4 py-2 m-2">
          <button class="mr-6" @click.prevent="google">
            <i
              class="fab fa-3x fa-google text-indigo-600 hover:text-blue-500"
            ></i>
          </button>
          <!-- <button class="" @click.prevent="facebook">
            <i
              class="fab fa-3x fa-facebook text-blue-600 hover:text-indigo-600"
            ></i>
          </button> -->
        </div>
      </form>
      <div
        v-if="err"
        class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p class="font-bold">Informational message</p>
        <!-- message of errors --> 
        <p class="text-sm">{{ err }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/firebase/init";
import firebase from "firebase/app";
require("firebase/auth");
/* import { use } from 'vue/types/umd'; */
export default {
  data() {
    return {
      account: { name: "", email: "", password: "" },
      err: "",
    };
  },
  name: "SignUp",
  methods: {
    register() {
      this.err = "";
      if (this.account.email && this.account.password) {
        //Send Form
        /* login with email using firebase */
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.account.email,
            this.account.password
          )
          .then((user) => {
            this.account.name = "";
            this.account.email = "";
            this.account.password = "";
            user
            this.$router.push({ name: "Dashboard" });
          })
          .catch((er) => {
            this.err = er.message;
          });
      } else {
        this.err = "All fields are required";
      }
    },
    /* login with google using firebase */
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.push({ name: "Dashboard" });
          result
        })
        .catch((error) => {
          this.err = error.message;
        });
    }
  },
};
</script>

<style></style>
