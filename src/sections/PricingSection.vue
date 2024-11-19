<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import Dialog from "primevue/dialog";
import { useToast } from 'primevue/usetoast';
import Toast from "primevue/toast";

const toast = useToast(); // Initialize Toast service
const visible = ref(false);
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const message = ref('');
const isEmailValid = ref(true);

// Email validation function
const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailValid.value = emailPattern.test(email.value);
};

// Clear form fields
const clearForm = () => {
  name.value = '';
  email.value = '';
  phoneNumber.value = '';
  message.value = '';
};

// Submit form
const submitForm = async () => {
  const payload = {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    message: message.value,
  };

  // Validate fields
  if (isEmailValid.value && phoneNumber.value.length === 10) {
    try {
      const response = await fetch("https://quantgenie.net/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);

        // Show success toast
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Form submitted successfully!',
          life: 3000,
        });

        visible.value = false;
        clearForm();
      } else {
        console.error("Failed to submit form:", response.statusText);

        // Show error toast
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to submit the form. Please try again.',
          life: 3000,
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error);

      // Show error toast
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'An error occurred. Please try again.',
        life: 3000,
      });
    }
  } else {
    // Show validation error toast
    toast.add({
      severity: 'warn',
      summary: 'Validation Error',
      detail: 'Please enter valid details.',
      life: 3000,
    });
  }
};
</script>


<template>
  <section class="px-6 md:px-10 py-10 xl:py-20 font-Inter 3xl:max-w-[85%] mx-auto">
    <Toast /> <!-- Add Toast Component Here -->
    <div class="text-center space-y-3">
      <h1 class="text-[40px] xl:text-[44px]">
        Flexible SaaS <span class="text-custom-blue">Pricing & Free Trial</span>
      </h1>
      <p
        class="font-thin tracking-wide mx-auto w-[90%] xl:w-[70%] text-[16px]"
      >
        QuantGenie offers flexible, subscription-based Pricing so you only pay for what you need. Whether you're a beginner or a seasoned trader, our tiered plans ensure you get access to the tools and features that best suit your trading style.
      </p>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10 xl:mt-20 2xl:px-10">
      <div class="p-8 card rounded-3xl space-y-6">
        <h3 class="text-custom-blue text-[44px]">7-Day Free Trial</h3>
        <p class="font-thin text-[19px]">
          Explore QuantGenie risk-free and unlock the full potential of automated and manual trading for 7 days.
        </p>
        <Button @click="visible = true" title="Get Started" />
      </div>
      <div class="p-8 card rounded-3xl space-y-6">
        <h3 class="text-custom-blue text-[44px]">Affordable Monthly Pricing</h3>
        <p class="font-thin text-[19px]">
          Get premium features with a transparent, subscription-based model.
        </p>
        <Button @click="visible = true" title="Get Started" />
        <p>240+ people Subscribed in last 24 hours</p>
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      header="Enquiry"
      class="w-[90%] md:w-[60%] xl:w-[35%]"
    >
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
          <small v-if="!isEmailValid" class="text-red-500">
            Invalid email address
          </small>
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
          <Button
            type="submit"
            title="Submit"
            label="Submit"
            class="p-button-primary"
          ></Button>
        </div>
      </form>
    </Dialog>
  </section>
</template>


<style scoped>
.card {
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    10px 10px 20px rgba(0, 0, 0, 0.7);
}
</style>
