<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
const store = useStore();
const username=sessionStorage.getItem('user');
const userimg=sessionStorage.getItem('img');
const useremail=sessionStorage.getItem('email');

const showforme= ()=>{
    store.commit('setshowFormPost',true)
};
</script>
<template>
    <header class="z-50 fixed right-0 top-0 left-60 bg-yellow-50 py-2.5 px-4 border-b shadow-sm">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between">
        <div @click="showforme" class="text-lg font-bold p-1.5 rounded-lg border border-yellow-200 hover:bg-yellow-200"><i class="fa-solid fa-plus"></i> add post</div>
        <div class="flex items-center">
            <span class="text-sm font-semibold">{{ username }}</span>
            <span class="inline-flex items-center justify-center text-gray-600 text-xs bg-white transition ml-2">
              <img class="w-12 h-12 rounded-full" :src="userimg" alt="">
            </span>
        </div>
      </div>
    </div>
  </header>
</template>