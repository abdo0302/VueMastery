<script setup>;
import Navbar from '../components/navbar.vue'
import Header from '../components/header.vue'
import Main from '../components/main.vue'
import Form from '../components/formePost.vue'
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const closeforme= ()=>{
    store.commit('setshowFormPost',false)
};
const showForm = computed(() => store.state.showFormPost);
</script>
<template>
    <div class="relative bg-yellow-50 overflow-hidden max-h-screen">
  <Header/>
  
  <Navbar/>
  <Main/>
</div>
<section v-if="showForm"class="bg-black/70 fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center">
        <i @click="closeforme" class="fa-solid fa-x text-white absolute top-6 right-8 hover:bg-slate-400 p-2 rounded-full"></i>
        <Form/>
</section>
</template>