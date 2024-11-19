<script setup>
defineProps({
  title: String,
})
</script>

<template>
    <button class="border border-algo-orange text-algo-orange px-8 py-3 rounded-xl w-full hover:bg-algo-orange hover:text-black transition duration-200 ease-in-out">
        {{ title }}
    </button>
</template>



