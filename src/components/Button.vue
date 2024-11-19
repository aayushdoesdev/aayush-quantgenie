<script setup>
defineProps({
  title: String,
})
</script>

<template>
    <button class="shadow-button">
        {{ title }}
    </button>
</template>

<style scoped>
.shadow-button {
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.2) ,
    10px 10px 20px rgba(0, 0, 0, 0.7) inset -20px 10px 30px rgba(0, 0, 0, 0.8),
    inset 5px 5px 10px rgba(255, 255, 255, 0.16);
  background: linear-gradient(90deg, #1767a8 1%, #2888d2 25%);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 32px;
  padding-right: 32px;
  border: 4px solid #2faefe;
  border-radius: 16px;
  color: white;
}
</style>

