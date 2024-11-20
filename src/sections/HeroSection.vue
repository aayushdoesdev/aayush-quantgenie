<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
// import Dialog from "primevue/dialog";

// const visible = ref(false);


// Form fields
// const name = ref('');
// const email = ref('');
// const phoneNumber = ref('');
// const message = ref('');
// const isEmailValid = ref(true);

// Function to validate email using regex pattern
// const validateEmail = () => {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   isEmailValid.value = emailPattern.test(email.value);
// };

// Form submit handler
// const submitForm = () => {
//   if (isEmailValid.value && phoneNumber.value.length === 10) {
//     console.log('Form submitted successfully');
//     visible.value = false;
//   } else {
//     alert('Please enter valid details');
//   }
// };
</script>

<template>
  <section
    class="px-6 md:px-10 py-10 flex flex-col xl:flex-row items-center justify-between 3xl:max-w-[85%] mx-auto space-y-4 relative"
  >
  <div class="absolute right-0 top-0 opacity-35 hidden xl:block">
    <img src="/fillerBg.svg" alt="" class="w-[75%] 2xl:w-[90%]">
  </div>
    <div class="w-full xl:w-[45%] space-y-6">
      <h1
        class="font-Inter text-[40px] leading-[55px] md:leading-[65px] md:text-[50px]"
      >
        <span class="text-custom-blue"
          >Transform Your Trading with QuantGenie's</span
        >
        All-in-One SaaS Platform
      </h1>
      <p class="font-Inter font-thin tracking-wide text-[17px] md:text-[19px]">
        QuantGenie offers a seamless, scalable, and powerful SaaS solution for
        traders who want to automate and optimize their stock, options, and
        commodities trading. Access our cloud-based platform from anywhere,
        anytime, and elevate your trading with cutting-edge algorithms and
        advanced manual trading tools.
      </p>
      <div class="mt-6">
        <a href="https://app.quantgenie.net/register" target="_blank"><Button title="Get Started" /></a>
      </div>
    </div>
    <div class="w-full xl:w-[45%] relative z-10">
      <img
        src="../assets/images/heroBg.png"
        alt=""
        class="w-full md:w-[80%] mx-auto xl:m-0 xl:w-full"
      />
    </div>
  </section>

  <!-- <Dialog v-model:visible="visible" modal header="Enquiry" class="w-[90%] md:w-[60%] xl:w-[35%]">
    <form @submit.prevent="submitForm" class="flex flex-col gap-2">
      
      <div class="flex flex-col gap-1 mb-3">
        <label for="name" class="font-semibold w-6rem">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="py-2 px-4 border border-white border-opacity-25 rounded-lg outline-none"
          required
        />
      </div>

      
      <div class="flex flex-col gap-1 mb-3">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          @input="validateEmail"
          class="py-2 px-4 border border-white border-opacity-25 rounded-lg outline-none"
          :class="{ 'border-red-500': !isEmailValid }" 
          required
        />
        <small v-if="!isEmailValid" class="text-red-500">Invalid email address</small>
      </div>

      
      <div class="flex flex-col gap-1 mb-3">
        <label for="number" class="font-semibold w-6rem">Number</label>
        <input
          type="text"
          id="number"
          v-model="phoneNumber"
          pattern="^[0-9]{10}$"
          maxlength="10"
          class="py-2 px-4 border border-white border-opacity-25 rounded-lg outline-none"
          required
          onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        />
      </div>

      
      <div class="flex flex-col gap-1 mb-3">
        <label for="message" class="font-semibold w-6rem">Message</label>
        <textarea
          id="message"
          v-model="message"
          class="py-2 px-4 border border-white border-opacity-25 rounded-lg outline-none"
          rows="4"
        ></textarea>
      </div>

      
      <div class="flex justify-end gap-2 mt-6">
        <Button type="submit" title="Submit" label="Submit" class="p-button-primary"></Button>
      </div>
    </form>
  </Dialog> -->
</template>
