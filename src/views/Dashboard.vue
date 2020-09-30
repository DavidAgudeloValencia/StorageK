<template>
  <div class="w-full">
    <div class="bg-gray-200">
      <h1 class="text-center text-3xl font-light">
        select your photo to upload
      </h1>
      <div class="text-center pt-24 pb-6">
        <!-- Upload images --> 
        <form v-on:submit.prevent="upload">
          <button type="submit">
            <i
              class="fas fa-3x fa-cloud-upload-alt text-gray-600 hover:text-gray-700"
            ></i>
          </button>
          <br />
          <input id="file-input" type="file" accept="image/png, image/jpg" />
        </form>
      </div>
    </div>
    <hr />
    <div class="bg-gray-100 pb-16">
      <h1 class="text-center text-3xl font-light mb-8">List of yours Images</h1>
      <div class="">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
        <!-- List objet  -->
          <div class="" v-for="(item, index) in urls" :key="index">
            <div
              class="shadow-outline max-w-sm rounded overflow-hidden  bg-gray-100 ml-4 pb-3"
            >
              <img class="w-full" :src="item.srcvalue" alt="Una Img bonita" />
              <div class="px-6 pb-2">
                <div class="font-bold text-xl mb-2 text-center">
                  The url to use is
                </div>
                <button class="bg-transparent">
                  <i class="far fa-trash-alt"></i>
                </button>
                <input
                  type="text"
                  id="URL"
                  placeholder="URL"
                  :value="item.srcvalue"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-4/5 ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      /* object to list the images */
      urls: [
        {
          id: "1",
          srcvalue:
            "https://images.unsplash.com/photo-1600712221598-c643d85dff3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        },
        {
          id: "2",
          srcvalue:
            "https://images.unsplash.com/photo-1594528914265-7e78e32eda2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          id: "3",
          srcvalue:
            "https://images.unsplash.com/photo-1600726685830-03a6f172a11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
        },
      ],
    };
  },
  created() {
    console.log("Created");
  },
  methods: {
    upload() {
      //In construcction 😁
      console.log("Uploading...");
      const imgUpload = document.getElementById("file-input").value;
      console.log(imgUpload)

      console.log("Good");
    },
  },
};
</script>

<style></style>
