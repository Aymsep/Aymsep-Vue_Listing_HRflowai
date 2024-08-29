<template>
    <BreadCrump :Jobname="job.name" />
    <div class="mt-10 flex justify-between">
        <div class="">
            <CustomHeader tag="h1" customClass="font-bold capitalize" :text="job.name" />
            <CustomHeader tag="p" customClass="text-gray-400" :text="formatTime(job.created_at)" />
        </div>
        <div class="actions flex gap-2">
            <ActionButton  color="#219d92" text="Apply Now" @clickB="console.log('clicked')" />
            <Icon icon="bi:save" class="border py-[10px] border-teal-600 rounded-md text-teal-600" width="" height="43" />
            <Icon icon="material-symbols:share" class="border py-[10px] border-teal-600 rounded-md text-teal-600" width="" height="43" />
        </div>
    </div>

    <div class="about mt-10 flex w-[450px] justify-between ">
        <img src="https://placehold.co/80" alt="">
        <div class="content">
            <div class="flex items-center gap-3">
                <CustomHeader tag="span" customClass="text-teal-600" :text="job.tags[0].value" />
                <!-- <div> -->
                    <Icon icon="fluent:location-20-regular" class="text-teal-600" />
                    <span class="text-gray-600">{{ job.location.text ? job.location.text : 'N/A' }}</span>
                <!-- </div> -->
            </div>
            <div class="mt-5">
                <Badges :items="job.tags" choice="value" :shows="2" from="1" />
            </div>
        </div>
    </div>

    <div class="mt-10">
        <CustomHeader tag="h2" customClass="font-bold" text="Job Description" />
        <p class="mt-2 capitalize text-gray-600">
            {{job.summary ? job.summary : 'no description available' }}.
        </p>
    </div>

    <div class="mt-10" v-if="job.sections.length > 0 || job.tasks.length > 0">
        <CustomHeader  tag="h2" customClass="font-bold" text="Qualifications" />
        <ul v-if="job.tasks" class="mt-2 capitalize text-gray-600">
            <li v-for="(task,index) in job.tasks" :key="index" >
            {{ task.name }}
            </li>
        </ul>
        <p v-if="job.sections.length > 0" class="mt-2 capitalize text-gray-600">
            {{ job.sections[0].description ? job.sections[0].description : 'No description available' }}
        </p>
    </div>

    <div class="mt-10">
        <CustomHeader tag="h2" customClass="font-bold" text="Required Skills " />
        <div class="mt-3 capitalize text-gray-600">
            <Badges :items="job.skills" />
        </div>
    </div>

    <ul v-if="job.languages" class="mt-10">
        <CustomHeader tag="h2" customClass="font-bold" text="Languages " />
        <li v-for="lang in job.languages" class="mt-3 capitalize text-gray-600">
          *  {{ lang.name }}
        </li>
    </ul>
    
</template>

<script setup>
import {useJobsStore} from '@/store/jobs'
import {storeToRefs} from 'pinia'
import {onMounted} from 'vue'
import { useRoute } from 'vue-router'
import BreadCrump from '@/components/common/BreadCrump.vue'
import {watchEffect,ref} from 'vue'
import ActionButton from '@/components/common/ActionButton.vue'
import Icon from '@/components/common/Icon.vue'
import {formatTime} from '@/utils'
import Badges from '@/components/common/Badges.vue'


const route = useRoute()
const JobStore = useJobsStore()
const job = ref({})





watchEffect(async() => {
    if(JobStore.jobs.length == 0) {
        await JobStore.getJobs()
    }
    job.value = JobStore.getJobById(route.params.id);
    console.log('tt',job.value)
});

</script>

