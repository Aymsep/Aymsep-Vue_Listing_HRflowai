<template>
    <div>
        {{$route.params.id}}
        <Router-link to="/">return to jobs</Router-link>
    </div>
</template>

<script setup>
import {useJobsStore} from '@/store/jobs'
import {storeToRefs} from 'pinia'
import {onMounted} from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const JobStore = useJobsStore()

onMounted(() => {
    console.log('dd',JobStore.getJobById(route.params.id))
});

</script>

