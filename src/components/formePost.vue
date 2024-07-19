<script setup>
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const post={
    userId:sessionStorage.getItem('id'),
    namberLike: 0,
    img:'',
    title:'',
    body:''
}
const addpost=()=>{
    store.dispatch('addpost',post)
}
</script>
<template>
   <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg">
              <h3 class="pt-4 text-2xl font-semibold text-center">Create Post</h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                    URL
                  </label>
                  <input v-model="post.img"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="image"
                    type="text"
                    placeholder="image"
                  />
                </div>
                <div class="">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Title
                  </label>
                  <textarea v-model="post.title"
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Your Title"/>
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Description
                  </label>
                  <textarea v-model="post.body"
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Your Description"/>
                </div>
                <div class="mb-6 text-center">
                  <button @click="addpost"
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                  Create
                  </button>
                </div>
              </form>
            </div>
</template>