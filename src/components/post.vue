<script setup>
import comment from '../components/comment.vue';
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
    store.dispatch('getPosts')
    store.dispatch('getUsers')
});
const Commantshow= (id)=>{
    store.commit('setshowComments',true)
    store.dispatch('getComments',id)
};

const Commanthid= ()=>{
    store.commit('setshowComments',false)
};

const posts = computed(() => store.state.posts);
const users = computed(() => store.state.users);
const showCommant = computed(() => store.state.showComats);
const comant={
    postId:0,
    name:sessionStorage.getItem('user'),
    img:sessionStorage.getItem('img'),
    email:sessionStorage.getItem('email'),
    body:''
}

const comentere=(id)=>{
    comant.postId=+id;
    store.dispatch('postComments',comant);
}
</script>
<template>
    <article v-for="(post , i) in posts" :key="i" class="w-full mb-4 break-inside p-6 border rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
                    <div class="flex pb-6 items-center justify-between">
                    <div class="flex items-center gap-3">
                        <img class="rounded-full max-w-none w-12 h-12" :src="users[post.userId].img" />
                        <div class="">
                            <a class="inline-block text-lg font-bold dark:text-white" href="#">{{users[post.userId].name }}</a>
                            <span class="ml-10">13/02/2024</span>
                        </div>
                    </div>
                    </div>
                    <h2 class="text-2xl font-extrabold dark:text-white">
                    {{ post.title }}
                    </h2>
                    <div class="py-4">
                    <div class="flex justify-between gap-1 mb-1">
                        <a class="flex justify-center w-full" href="#">
                        <img class="max-w-full rounded-lg"
                            :src="post.img" />
                        </a>
                    </div>
                    </div>
                    <p class="dark:text-slate-200">
                    {{ post.body }}
                    </p>
                    <div class="py-4">
                    <a class="inline-flex items-center" href="#">
                        <span class="mr-2">
                        <svg class="fill-rose-600 dark:fill-rose-400" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                            <path
                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                            </path>
                        </svg>
                        </span>
                        <span class="text-lg font-bold">{{ post.namberLike }}</span>
                    </a>
                    </div>
                    <div class="relative">
                    <input v-model="comant.body"
                        class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                        type="text" placeholder="Write a comment" />
                    <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                        <i @click="Commantshow(post.id)" class="fa-solid fa-comment text-2xl mr-3"></i>
                        <svg @click="comentere(post.id)" class="fill-blue-500 dark:fill-slate-50" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                        </svg>
                    </span>
                    </div>
    </article>

    <section v-if="showCommant" class="bg-black/70 fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center">
        <i @click="Commanthid" class="fa-solid fa-x text-white absolute top-6 right-8 hover:bg-slate-400 p-2 rounded-full"></i>
        <comment/>
    </section>
</template>