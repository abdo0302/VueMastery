<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const Comments = computed(() => store.state.comments);
</script>
<template>
    <div class="bg-white w-1/2 p-6 pr-10 mt-6 h-5/6 overflow-y-auto">
                    <!-- Comment row -->
                    <div v-for="(Comment,u) in Comments" :key="u" class="media flex pb-4">
                        <a class="mr-4" href="#">
                        <img class="rounded-full max-w-none w-12 h-12" :src="Comment.img" />
                        </a>
                        <div class="media-body">
                        <div>
                            <a class="inline-block text-base font-bold mr-2" href="#">{{ Comment.name }}</a>
                            <span class="text-slate-500 dark:text-slate-300">25 minutes ago</span>
                        </div>
                        <p>{{ Comment.body }}</p>
                        <div class="mt-2 flex items-center">
                            <a class="inline-flex items-center py-2 mr-3" href="#">
                            <span class="mr-2">
                                <svg class="fill-rose-600 dark:fill-rose-400" style="width: 22px; height: 22px;"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                </path>
                                </svg>
                            </span>
                            <span class="text-base font-bold">12</span>
                            </a>
                            <button class="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                            Repply
                            </button>
                        </div>
                        </div>
                    </div>
                    <!-- End comments row -->
    </div>
</template>