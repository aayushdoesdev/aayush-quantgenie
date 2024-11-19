<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="pt-10 px-6 md:pt-20 md:px-10 pb-10 3xl:max-w-[85%] mx-auto">
    <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-start justify-items-center ">
      <div class="space-y-6 justify-self-start md:justify-self-center mt-8 md:mt-0 col-span-2 md:col-span-1">
        <a href="/">
          <img src="/public/Logo.svg" alt="Logo" class="w-[80%]" />

        </a>
        <p class="text-[#89A3B2] text-[14px] 2xl:text-[16px]">
          QuantGenie offers a scalable SaaS platform for automating stock, options, and commodities trading. Access our cloud-based tools anytime, anywhere. Optimize trading with advanced algorithms and manual tools.
        </p>
      </div>
      <div class="text-[14px] 2xl:text-[16px] space-y-4 justify-self-start md:justify-self-center mt-8 md:mt-0">
        <p>Quick Link</p>
        <div class="text-[#89A3B2] space-y-2 flex flex-col">
          <a href="#">Home</a>
          <a href="#why" class="cursor-pointer">Why Choose Us</a>
      <a href="#features2" class="cursor-pointer">Key Features</a>
      <a href="#price" class="cursor-pointer">Plans & Pricing</a>
        
      
        </div>
      </div>
      <div class="text-[14px] 2xl:text-[16px] space-y-4 justify-self-start md:justify-self-start mt-8 md:mt-0">
        <p>Legal</p>
        <div class="text-[#89A3B2] space-y-2 flex flex-col">
          <router-link :to="{ path: '/terms-and-conditions', hash: '#tc' }">Terms & Conditions</router-link>
          <router-link :to="{ path: '/terms-and-conditions', hash: '#privacy' }">Privacy Policy</router-link>
          <router-link :to="{ path: '/terms-and-conditions', hash: '#dis' }">Disclosure</router-link>
          <router-link :to="{ path: '/terms-and-conditions', hash: '#rules' }">Trading rules & discipline</router-link>
          <router-link :to="{ path: '/terms-and-conditions', hash: '#technology' }">Technology</router-link>
          <router-link :to="{ path: '/terms-and-conditions', hash: '#refund' }">Refund Policy</router-link>
          <router-link :to="{ path: '/terms-and-conditions', hash: '#grievance' }">Grievance Redressal Process</router-link>
        </div>
      </div>
      <div class="text-[14px] 2xl:text-[16px] space-y-2 justify-self-start mt-8 xl:mt-0 col-span-2 xl:col-span-1">
        <p>More</p>
        <div class="space-y-2">
          <p>GST Number: <span class="text-[#89A3B2]">33BBXPM7184G1Z1</span> </p>
          <p>Bank Name: <span class="text-[#89A3B2]">HDFC Bank</span></p>
          <p>Account Number: <span class="text-[#89A3B2]">50200092253781</span></p>
          <p>IFSC Code: <span class="text-[#89A3B2]">HDFC0000136</span></p>
        </div>
        <div class="space-y-2 pt-4 xl:hidden">
          <p>Follow Us On</p>
          <div class=" flex gap-4">
            <i class="pi pi-linkedin text-[30px]"></i>
            <i class="pi pi-instagram text-[30px]"></i>
            <i class="pi pi-facebook text-[30px]"></i>
          </div>
        </div>
      </div>
      <div class="text-[14px] 2xl:text-[16px] space-y-4 justify-self-start xl:justify-self-center mt-8 xl:mt-0">
        <div class="">
          <p>Address</p>
          <p class="text-[#89A3B2]">QubiQ Technology, Villa Green Layout, Thaiyur Main Rd, Kayar, Kolathur, Tamil Nadu 603110</p>
        </div>
        <div class="">
          <p>Contact</p>
          <p class="text-[#89A3B2]">+91 9962433444</p>
          
        </div>
        <div class="">
          <p>Email</p>
          <a href="mailto:support@quantgenie.com" class="text-[#89A3B2]">support@quantgenie.com</a>
        </div>
        <div class="space-y-2 hidden xl:block">
          <p>Follow Us On</p>
          <div class=" flex gap-4">
            <i class="pi pi-linkedin text-[30px]"></i>
            <i class="pi pi-instagram text-[30px]"></i>
            <i class="pi pi-facebook text-[30px]"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mt-8 space-x-8 border border-white border-opacity-15 rounded-lg w-fit mx-auto p-4 bg-gradient-to-b from-[#1F242A] to-[#33383E] text-[14px]">
      <p>Profit <span class="text-green-500"><i class="pi pi-sort-up-fill text-[14px]"></i> 47%</span></p>
      <p>Loss <span class="text-red-500"><i class="pi pi-sort-down-fill text-[14px]"></i> 22%</span></p>
      <p>Number of trades: <span>2156</span></p>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between text-white mt-10 space-y-2 md:space-y-0">
        <div class="flex items-center gap-1">
            <p>Backed By</p>
           
         <a href="https://www.xtentioncrew.tech/ " target="_blank">  <img src="/xtention.svg" alt=""></a>   
        </div>
        <p class="text-[#89A3B2]">All Rights Reserved</p>
    </div>
  </footer>
</template>
