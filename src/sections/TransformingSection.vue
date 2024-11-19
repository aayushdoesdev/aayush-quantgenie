<script setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";

const visible1 = ref(false);
const visible2 = ref(false);
</script>

<template>
  <section class="font-Inter p-6 md:p-10 3xl:max-w-[85%] mx-auto">
    <h1
      class="text-center mx-auto md:w-[75%] xl:w-[60%] text-[38px] leading-[50px] md:text-[44px] md:leading-[60px]"
    >
      Transform Your Trading Experience with
      <span class="text-custom-blue">Our Powerful Features </span>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 mt-16">
      <div class="w-full flex flex-col items-center gap-6">
        <div class="card w-full py-4 rounded-3xl flex justify-center">
          <img src="../assets/images/Analyzegrowthgraph.webp" alt="" class="w-[350px] md:w-[400px]" />
        </div>
        <div
          class="flex flex-col items-center text-[17px] xl:text-[19px] text-center"
        >
          <p class="text-custom-blue">Advanced Themes for Manual Trading</p>
          <button @click="visible1 = true" class="flex items-center gap-1">
            <p class="text-[16px]">Know More</p>
            <i class="pi pi-angle-right"></i>
          </button>
        </div>
        <Dialog v-model:visible="visible1" modal class="w-[95%] md:w-[60%] xl:w-[40%]">
          <div class="space-y-4">
            <h3 class="text-custom-blue text-[25px]">
              Not ready for full automation? QuantGenie’s platform offers
              advanced technical indicators and trading strategies for manual
              trading as well.
            </h3>
            <p class="font-light text-[16px]">
              1. Customized Indicators for deep trend, momentum, and volatility
              analysis.
            </p>
            <p class="font-light text-[16px]">
              2. Detailed Insights into stocks, stock options, index options,
              and commodities.
            </p>
            <p class="font-light text-[16px]">
              3. Flexible Themes that adapt to your unique trading strategies.
            </p>
          </div>
        </Dialog>
      </div>
      <div class="w-full flex flex-col items-center gap-6 text-center">
        <div class="w-full py-4 card rounded-3xl flex justify-center">
          <img src="../assets/images/TargetHit.webp" alt="" class="w-[280px] md:w-[310px]"/>
        </div>
        <div class="flex flex-col items-center text-[17px] xl:text-[19px]">
          <p class="text-custom-blue">Comprehensive Market Coverage</p>
          <button @click="visible2 = true" class="flex items-center gap-1">
            <p class="text-[16px]">Know More</p>
            <i class="pi pi-angle-right"></i>
          </button>
        </div>

        <Dialog v-model:visible="visible2" modal class="w-[95%] md:w-[60%] xl:w-[40%]">
          <div class="space-y-4">
            <h3 class="text-custom-blue text-[25px]">
              QuantGenie provides support across major asset classes, including:
            </h3>
            <p class="font-light text-[16px]">
              1. <span class="text-custom-blue font-semibold">Stocks:</span> Access individual stocks for detailed analysis and
              automated trading.
            </p>
            <p class="font-light text-[16px]">
              2. <span class="text-custom-blue font-semibold">Stock & Index Options:</span> Trade Nifty, Bank Nifty, Finnifty, and
              other major indices.
            </p>
            <p class="font-light text-[16px]">
              3. <span class="text-custom-blue font-semibold">Commodities:</span> Automate and trade major commodities like Crude
              Oil and Natural Gas.
            </p>
          </div>
        </Dialog>
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
