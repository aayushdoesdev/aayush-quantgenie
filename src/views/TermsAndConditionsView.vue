<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router"; 

// Import your section components
import TermsAndCondition from '../sections/TermsAndConditionsSections/TermsAndCondition.vue';
import PrivacyPolicy from '../sections/TermsAndConditionsSections/PrivacyPolicy.vue';
import Disclosure from '../sections/TermsAndConditionsSections/Disclosure.vue';
import TradingRules from '../sections/TermsAndConditionsSections/TradingRules.vue';
import Technology from '../sections/TermsAndConditionsSections/Technology.vue';
import RefundPolicy from '../sections/TermsAndConditionsSections/RefundPolicy.vue';
import GrievanceRedressal from '../sections/TermsAndConditionsSections/GrievanceRedressal.vue';

// Access the current route using useRoute
const route = useRoute();

// Function to handle scrolling to the section
const scrollToSection = (hash) => {
  if (hash) {
    const section = document.querySelector(hash);
    if (section) {
      const offset = 100; // Adjust based on navbar height
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  }
};

// Scroll to the section when the component is mounted
onMounted(() => {
  scrollToSection(route.hash);
});

// Watch for route changes and scroll to the new section
watch(route, (newRoute) => {
  scrollToSection(newRoute.hash);
});
</script>

<template>
  <section
    class="font-Inter px-2    md:px-10 py-10 xl:px-40 flex flex-col items-start 3xl:max-w-[85%] mx-auto space-y-6"
  >
  <TermsAndCondition id="tc"/>
  <PrivacyPolicy id="privacy"/>
  <Disclosure id="dis"/>
  <TradingRules id="rules"/>
  <Technology id="technology"/>
  <RefundPolicy id="refund"/>
  <GrievanceRedressal id="grievance"/>
  </section>
</template>
