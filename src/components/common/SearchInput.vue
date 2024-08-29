<template>
   <div class="mx-2 my-10 rounded-xl border bg-white px-4 py-8">
  <div class="mb-2 flex">
    <div class="mr-1 w-full">
      <input v-model="search" type="text" class="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Search for articles" />
    </div>
  </div>
  <div class="space-x-1">
    <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span class="mr-1 text-gray-300">#</span>Policy</a>
    <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span class="mr-1 text-gray-300">#</span>Science</a>
    <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span class="mr-1 text-gray-300">#</span>Technology</a>
    <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span class="mr-1 text-gray-300">#</span>Health</a>
    <a class="text-sm font-medium text-gray-400 hover:text-blue-600" href="#"><span class="mr-1 text-gray-300">#</span>Research</a>
    
  </div>
</div>

</template>

<script setup>
import { ref , watch} from 'vue';
import { useJobsStore } from '@/store/jobs';

const search = ref('');
const { allJobs, jobs, filterJobs } = useJobsStore();

watch(search, (newValue, oldValue) => {
    filterJobs(search.value); 
});
</script>

<style lang="scss" scoped>

</style>