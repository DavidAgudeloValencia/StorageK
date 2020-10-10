<template>
  <div class="w-full">
    <div class="bg-gray-200">
      <h1 class="text-center text-3xl font-light">
        select your photo to upload {{ this.load }}
      </h1>
      <div class="text-center pt-12 pb-1">
        <div
          v-if="errores"
          class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p class="font-bold">Informational message</p>
          <!-- message of errors -->
          <p class="text-sm">{{ errores }}.</p>
        </div>
        <!-- Upload images -->
        <button @click="$refs.fileInput.click()">
          <i
            class="fas fa-3x fa-cloud-upload-alt text-gray-600 hover:text-gray-700"
          ></i>
        </button>
        <input
          style="display: none"
          @change="onFileSelected"
          ref="fileInput"
          type="file"
          accept="image/*"
        />
        <br />
        <button
          class="bg-purple-800 rounded hover:bg-purple-500 text-blue-100 px-4 mt-3 mb-2"
          @click="upload"
        >
          Upload
        </button>
        <div class="relative pt-1">
          <div
            class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200"
          >
            <div
              :style="[{ width: this.load + '%' }]"
              class="shadow-none flex flex-col whitespace-nowrap text-gray-800 justify-center bg-teal-400"
            >
              <p class="animate-bounce">Loading {{ this.load }}%</p>
            </div>
          </div>
        </div>
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
          <div class="" v-for="(item, id) in images" :key="id">
            <div
              class="shadow-outline max-w-sm rounded overflow-hidden  bg-gray-100 ml-4 pb-3"
            >
              <img
                class="w-full"
                :src="
                  'http://storagek-api.herokuapp.com/public/storage/images/' +
                    item.file
                "
                alt="Una Img bonita"
              />
              <div class="px-6 pb-2">
                <div class="font-bold text-xl mb-2 text-center">
                  The url to use is
                </div>
                <button class="bg-transparent">
                  <i
                    class="far fa-trash-alt"
                    @click.prevent="deletefile(item, id)"
                  ></i>
                </button>
                <input
                  type="text"
                  id="URL"
                  placeholder="URL"
                  :value="
                    'http://storagek-api.herokuapp.com/public/storage/images/' +
                      item.file
                  "
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
import axios from "axios";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
export default {
  name: "Dashboard",
  data() {
    return {
      url: "https://storagek-api.herokuapp.com/public/api/file",
      user: [],
      /* object to list the images */
      images: [],
      selectedFile: null,
      load: "",
      errores: "",
    };
  },
  created() {
    this.user = firebase.auth().currentUser;
    axios
      .get(this.url + "/" + this.user.email)
      .then((res) => {
        this.images = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    upload() {
      this.errores = "";
      if (this.selectedFile) {
        console.log("Uploading...");
        const fd = new FormData();
        fd.append("file", this.selectedFile);
        fd.append("email", this.user.email);
        axios
          .post(this.url, fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (uploadEvent) => {
              this.load = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
            },
          })
          .then((res) => {
            const imageServidor = res.data;
            console.log(imageServidor);
            this.images.push(imageServidor);
          });
        console.log("Good");
        setInterval(()=>{
          if (this.load == '100') {
            location.reload()
          }
          
        }, 500)

      } else {
        this.errores = "First select your photo";
      }
    },
    deletefile(item, id) {
      const confirmacion = confirm(`Eliminar Image ${item.file}`);
      if (confirmacion) {
        if (confirmacion) {
          axios.delete(this.url + "/" + `${item.id}`).then(() => {
            this.images.splice(id, 1);
          });
        }
      }
    },
  },
};
</script>

<style></style>
