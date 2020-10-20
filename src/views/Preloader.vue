<template>
  <transition class="">
    <div v-if="show" class="bg-gray-100 w-full h-screen">
      <div class="flex items-center justify-center h-screen">
        <div class="flex items-center animate-bounce">
          <svg
            class="fill-current h-16 w-16 "
            width="55"
            height="55"
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

          <p class="font-semibold text-purple-900 text-6xl ml-1 tracking-tight">
            K
          </p>
        </div>
      </div>
      <!--  -->
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (this.show) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 700);
    },
  },
};
</script>

<style></style>
