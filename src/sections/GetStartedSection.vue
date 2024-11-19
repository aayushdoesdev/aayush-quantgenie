<script setup>
import Button from '../components/Button.vue';
</script>

<template>
  <section class="px-6 md:px-10 py-10 xl:py-20 font-Inter 3xl:max-w-[85%] mx-auto">
    <div class="flex flex-col items-center justify-center py-10 card space-y-5 rounded-3xl">
      <h1 class="text-center text-[44px]">Get Started with <span class="text-custom-blue">QuantGenie</span></h1>
      <div class="flex flex-col items-center space-y-4 px-4">
        <p class="font-thin text-[17px] md:text-[19px] text-center w-full xl:w-[70%]">
          Join thousands of traders who <span class="font-normal">trust QuantGenie</span> for their trading
          automation and analysis needs. Our intuitive SaaS platform puts the
          power of advanced algorithms and technical indicators at your
          fingertips—anytime, anywhere.
        </p>
        <p class="font-thin text-center text-[17px] md:text-[19px]">
          Try QuantGenie for FREE with our <span class="font-bold text-custom-blue">7-day trial.</span> No credit card required,
          just sign up and start trading smarter today.
        </p>
        <Button title="Sign Up Now!!!"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    /* top-left white shadow */ 10px 10px 20px rgba(0, 0, 0, 0.7); /* bottom-right black shadow */
}
</style>
