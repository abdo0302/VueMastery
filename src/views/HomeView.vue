<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import login from '../components/login.vue'
import sginup from '../components/sginUp.vue'
import router from '../router/index';

const store = useStore();
const loginState = computed(() => store.state.login);
onMounted(() => {
  const username = sessionStorage.getItem('username');
  if (username) {
    router.push('/dashboard');
  }
});
</script>
<template>
        <div class="bg-slate-100 flex items-center justify-evenly px-6 py-8 mx-auto md:h-screen lg:py-0">
           <img width="250px" class="mt-auto" src="../components/icons/login.gif" alt="">
            <!-- login start-->
            <div v-if="loginState=='login'" class=" w-1/3 flex justify-center">
                <login/>
            </div>
             <!-- login end-->

              <!-- sgin up start-->
                <div v-if="loginState=='sgin-up'" class="w-1/3 flex justify-center">
                 <sginup/>
                </div>
              <!-- sgin up end-->
            <img width="200px" class="mt-auto" src="../components/icons/login1.gif" alt="">
        </div>
</template>