<template>
  <header
    class="bg-gray-100 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <router-link to="/">
        <div class="flex items-center flex-shrink-0 mr-8">
          <svg
            class="fill-current h-8 w-8 ml-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M4.39155 28L7.01955 21.304H1.87155L2.48355 17.884H8.35155L10.5115 12.34H5.18355L5.75955 8.92H11.8435L14.4355 2.296H18.0355L15.4435 8.92H22.7155L25.3075 2.296H28.9075L26.3155 8.92H31.1755L30.5995 12.34H24.9835L22.8235 17.884H27.8635L27.2515 21.304H21.4915L18.8995 28H15.2635L17.8915 21.304H10.6195L7.99155 28H4.39155ZM11.9515 17.884H19.2235L21.3835 12.34H14.1115L11.9515 17.884Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0.357388"
                y1="27.7482"
                x2="32.608"
                y2="27.8293"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.229167" stop-color="#212F45" />
                <stop offset="0.354167" stop-color="#006466" />
                <stop offset="0.510417" stop-color="#006466" />
                <stop offset="0.640625" stop-color="#101057" />
                <stop offset="0.786458" stop-color="#312244" />
                <stop offset="0.875" stop-color="#4D194D" />
              </linearGradient>
            </defs>
          </svg>

          <p class="font-semibold text-purple-900 text-3xl ml-1 tracking-tight">
            K
          </p>
        </div></router-link
      >
      <!-- Navbar for change login and register for the accounts and logout -->
      <div class=" absolute top-0 right-0">
        <div class="relative px-2 pt-2 pb-4 sm:flex sm:p-0 mr-8 mt-3" v-if="user">
        <button
          @click="isOpen = !isOpen"
          class="relative z-10 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
        >
          <img
            class="h-full w-full object-cover"
            src="@/assets/avatar-male.png"
            alt="Your avatar"
          />
        </button>
        <button
          v-if="isOpen"
          @click="isOpen = false"
          tabindex="-1"
          class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
        ></button>
        <div
          v-if="isOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
        >
          <router-link
            to="/Dashboard"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >Dashboard</router-link
          >
          <a
            @click.prevent="signout"
            class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >Sign out</a
          >
        </div>
      </div>
      <div v-else class="mt-4">
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-600 hover:text-black focus:text-gray-800 focus:outline-none w-10"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="px-2 pt-2 pb-4 sm:flex sm:p-0"
        >
          <router-link
            to="/SignUp"
            class="bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-4 py-2 rounded mr-4"
            >Sign Up</router-link
          >
          <router-link
            to="/LogIn"
            class="bg-gradient-to-r from-indigo-400 to-teal-400 hover:from-teal-500 hover:to-indigo-500 text-white font-semibold px-4 py-2 rounded mr-4"
            >LogIn</router-link
          >
        </nav>
      </div>
        
        </div>   
      
    </div>
  </header>
</template>

<script>
import "@/firebase/init";
import firebase from "firebase/app";
require("firebase/auth");
export default {
  data() {
    return {
      isOpen: false,
      user: null,
    };
  },
  created() {
    //functionality of the nabvar
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
    //check if there is a login
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    //logout
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>
