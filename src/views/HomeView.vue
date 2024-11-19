<script setup>
import HeroSection from "../sections/HeroSection.vue"
import FeaturesSection1 from "../sections/FeaturesSection1.vue"
import WhySection from "../sections/WhySection.vue";
import FeaturesSection2 from "../sections/FeaturesSection2.vue";
import TransformingSection from "../sections/TransformingSection.vue";
import ComprehensiveSection from "../sections/ComprehensiveSection.vue";
import IntegrationSection from "../sections/IntegrationSection.vue";
import PricingSection from "../sections/PricingSection.vue"
import GetStartedSection from "../sections/GetStartedSection.vue";
</script>

<template>
  <main>
    <HeroSection id="hero"/>
    <FeaturesSection1 />
    <WhySection id="why"/>
    <FeaturesSection2 id="features2"/>
    <TransformingSection id="transforming"/>
    <ComprehensiveSection id="about"/>
    <IntegrationSection id="integration"/>
    <PricingSection id="price"/>
  </main>
</template>