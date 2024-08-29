<script setup>
import JobCard from './JobCard.vue';
import { onMounted, ref,watch } from 'vue';
import { useJobsStore } from '@/store/jobs';
import { storeToRefs } from 'pinia';
import Loader from '../Loader.vue';
import Error from '../Error.vue';

const JobStore = useJobsStore();
const { allJobs, jobs, loading, error } = storeToRefs(JobStore);

onMounted(async () => {
    if (allJobs.value.length === 0) {
        await JobStore.getJobs();
    }
});
watch(jobs, (newJobs, oldJobs) => {
  console.log('Jobs have changed');
  // More complex actions can be performed here
});

</script>

<template>
    <Loader v-show="loading"/>
    <Error v-if="error" :message="error" />
    <ul role="list" class="divide-y divide-gray-100 m-5">
        <JobCard 
            v-for="job in jobs" 
            :job="job" 
            :key="job.id"
        />
    </ul>
</template>
