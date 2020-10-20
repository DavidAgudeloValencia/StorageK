<template>
  <div id="app" class="bg-gray-100 w-full h-screen">
    <Preloader />
    <div>
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Preloader from "@/views/Preloader";
import Navbar from "@/components/layout/Navbar";

export default {
  name: "app",
  components: {
    Preloader,
    Navbar,
  },
};
</script>
