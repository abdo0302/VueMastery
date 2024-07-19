<script setup>
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
    store.dispatch('getTodos',sessionStorage.getItem('id'))
});
const deletTodo=(id)=>{
    store.dispatch('deletTodo',id)
}
const todos = computed(() => store.state.todos);
</script>
<template>
    <div v-for="(todo , i) in todos" :key="i" class=" w-1/3 flex flex-wrap justify-center text-lg font-serif">
        <a href="#"
            class="relative pt-6 bg-gray-100 flex-grow text-black border-l-8 border-yellow-300 rounded-md px-3 py-2 w-full md:w-3/5 lg:w-3/12">
            {{ todo.title }}

            <div class="text-gray-500 font-thin text-sm pt-1">
                <span>{{ todo.completed }}</span>
            </div>
            <i @click="deletTodo(todo.id)" class="fa-solid fa-x text-sm absolute top-2 right-3"></i>
        </a>
    </div>
</template>