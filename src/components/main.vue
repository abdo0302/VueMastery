<script setup>
import Post from '../components/post.vue';
import todo from '../components/todo.vue';
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const main = computed(() => store.state.main);
</script>
<template>
    <main class="ml-60 pt-16 max-h-screen overflow-auto">
    <div class="px-6 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl shadow-lg p-8 mb-5">
            <div>
              <h2 class="text-2xl font-bold mb-4">{{ main }}</h2>

              <div v-if="main=='Posts'" class="flex flex-col items-center w-full">
                 <!-- post  -->
                  <Post/>
              </div>
              <div v-if="main=='Todos'" class="flex flex-wrap gap-4 justify-center w-full">
                 <!-- todos  -->
                 <todo/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>