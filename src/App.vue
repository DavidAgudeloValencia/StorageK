<template>
  <div id="app" class="bg-gray-100 w-full h-screen">
    <div>
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
}
</script>

