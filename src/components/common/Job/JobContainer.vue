<script setup>
import JobCard from './JobCard.vue';
import {onMounted,onUnmounted,ref} from 'vue';
import { useJobsStore } from '@/store/jobs';
import {storeToRefs} from 'pinia';
import Loader from '../Loader.vue';
import Error from '../Error.vue';




const JobStore = useJobsStore()
const {jobs,loading,error} = storeToRefs(JobStore)
const isMounted = ref(false)

onMounted(async () => {
    isMounted.value = true;
    if (isMounted.value) {
        await JobStore.getJobs();
    }
});

onUnmounted(() => {
    isMounted.value = false;
});

</script>




<template>
    <Loader v-show="loading"/>
    <Error v-if="error" :message="error" />
    <ul role="list" class="divide-y divide-gray-100 m-5">
        <JobCard v-for="job in jobs" :job="job" :key="job.id" />
    </ul>
</template>


