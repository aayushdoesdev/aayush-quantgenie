<script setup>
const features = [
    {
        "title": "Real-Time Market Analysis",
        "desc": "Execute trades instantly based on real-time data. Our algorithms ensure you never miss <b style='color: #2FAEFE'>profitable opportunities</b> while reducing manual effort.",
        "img": "/f1.svg"
    },
    {
        "title": "Automated Buy/Sell Execution",
        "desc": "Leverage powerful analytics to understand market movements. Our system provides actionable insights, helping you make smarter, data-driven decisions.",
        "img": "/f2.svg"
    },
    {
        "title": "Accurate Signal Generation",
        "desc": "Stay ahead of the market with real-time updates and notifications. Our system keeps you informed so you can react immediately.",
        "img": "/f3.svg"
    },
    {
        "title": "Risk Management Controls",
        "desc": "Safeguard your investments with advanced risk control features. Set stop-loss, take-profit, and more to limit exposure and secure profits.",
        "img": "/f4.svg"
    },
    {
        "title": "High-Speed Trade Execution",
        "desc": "Gain an edge with ultra-fast execution. Our platform processes trades in milliseconds, ensuring you act on opportunities faster than ever.",
        "img": "/f5.svg"
    },
    {
        "title": "Customizable Trading Strategies",
        "desc": "Personalize your trading experience with flexible algorithm settings. Whether you prefer preset strategies or custom designs, you’re in control.",
        "img": "/f6.svg"
    },
]
</script>

<template>
  <section class="font-Inter p-6 md:p-10 3xl:max-w-[85%] mx-auto">
    <h1 class="text-[44px] text-center">Our <span class="text-custom-blue">Features</span></h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-20 gap-16">
      <div v-for="item in features" class="flex flex-col items-center gap-6">
        <img
          class="card p-4 rounded-3xl"
          :src="item.img"
          alt=""
        />
        <div class="flex flex-col items-center gap-2">
          <p class="text-center text-custom-blue text-[19px]">
            {{ item.title }}
          </p>
          <p class="text-center font-light w-[80%] text-[16px]" v-html="item.desc">
          </p>
        </div>
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
