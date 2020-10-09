<template>
  <div>
    <header class="w-full">
      <img src="@/assets/aboutfinal1.png" alt="1" class="shadow-2xl" />
      <h1 class="font-extrabold text-6xl text-center">ABOUT</h1>
      <img src="@/assets/aboutfinal2.png" alt="2" />
    </header>
    <div class="mx-20 my-12">
      <h1 class="text-center text-4xl font-semibold">Description</h1>
      <p class="text-justify font-light text-2xl">
        This application works as image storage to later be used by means of the
        API with which this application connects to make the storage The images
        are registered by email and by email those listed in the Dashboard.
      </p>
      <hr />
      <br />
      <small class="font-light text-xl mb-32">
        Project git:
        <a
          class="text-purple-600 hover:text-purple-800"
          href="https://github.com/DavidAgudeloValencia/StorageK"
          >Storage#K <i class="fab fa-github"></i
        ></a>
      </small>
      <br />
      <br />
      <small class="font-light text-xl">
        Git of the Api you create for this project:
        <a
          class="text-blue-600 hover:text-blue-800"
          href="https://github.com/DavidAgudeloValencia/Storagek-Api"
          >Storage#K Api <i class="fab fa-github"></i
        ></a>
      </small>
      <br />
      <br />
      <small class="font-light text-xl">
        Page built with Vue js, TailwindCss and the implementation of a login
        through Firebase Auth
      </small>
      <hr />
      <br />
      <h1 class="text-center text-4xl font-semibold">Contact</h1>
      <small class="font-light text-base "
        ><i class="far fa-envelope"></i> david.agudelo.valencia@gmail.com</small
      >
      <br>
      <br>
      <small class="font-light text-base "
        ><i class="fab fa-github"></i> <a href="https://github.com/DavidAgudeloValencia"> https://github.com/DavidAgudeloValencia</a></small
      >
      <br>
      <br>
      <small class="font-light text-base "
        ><i class="fas fa-mobile-alt"></i> +57 3046710563</small
      >
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style></style>
