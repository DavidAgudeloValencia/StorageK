<template>
  <div
    class="max-w-md xl:max-w-full mx-auto flex rounded-lg overflow-hidden bg-transparent p-2 w-screen pt-24"
  >
    <div class="bg-transparent pt-12 xl:pl-20">
      <img class="" src="../assets/name.png" alt="" />
      <h1 class="text-3xl text-center text-blue-400">
        Image Storage for web pages
      </h1>
      <h1 class="text-3xl text-center text-blue-500 font-semibold">
        Krathmo Exlot
      </h1>
      <h1
        class="absolute inset-x-0 bottom-0 text-center text-red-500 font-light text-xl mb-4 animate-bounce"
      >
        <a href="/about">
          More information <i class="fas fa-mouse-pointer"></i>
        </a>
      </h1>
    </div>
    <div class="bg-transparent hidden xl:block">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 ml-48">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="Una Img bonita"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">
            The url to use is
          </div>
          <button class="bg-transparent" v-on:click="showme">
            <span v-if="showeye">
              <i class="far fa-eye"></i>
            </span>
            <span v-else>
              <i class="far fa-eye-slash"></i>
            </span>
            <!-- {{ showeye ? "x" : "👁" }} -->
          </button>
          <input
            type="password"
            id="URL"
            placeholder="URL"
            value="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-4/5 ml-8"
          />
        </div>
        <div class="px-6 pt-4 pb-2 ml-16 mb-4">
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="../assets/avatar.png"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Doménikos Theotokópoulos</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      showeye: false,
    };
  },
  name: "Home",
  components: {},
  methods: {
    showme() {
      if (this.showeye) {
        document.getElementById("URL").type = "password"
      }else{
        document.getElementById("URL").type = "text"
      }
      this.showeye = !this.showeye;
    },
  },
};
</script>
