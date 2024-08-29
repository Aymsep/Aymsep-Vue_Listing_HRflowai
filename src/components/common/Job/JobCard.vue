<template>
    <li class="mb-10 flex justify-between items-center rounded-lg bg-slate-200 py-5 px-6 gap-x-6 mx-auto w-[550px] sm:w-11/12">
      <div class="flex min-w-0 gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-base font-bold tracking-wide leading-6 text-gray-900">{{ job.name }}</p>
          <div class="flex pt-3 justify-between gap-4 w-[250px]">
            <div id="location_job" class="gap-1 flex items-center">
              <Icon style="color:#0d9488;" icon="fluent:location-20-regular" />
              <span class="text-sm">{{ job.location.text ? job.location.text : 'N/A' }}</span>
            </div>
            <div id="type_job" class="flex gap-1 items-center">
              <Icon style="color:#0d9488;" icon="fluent:calendar-20-regular" />
              <span class="text-sm">{{ job.tags.length > 1 ? job.tags[1].value : 'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="details" class="flex items-center gap-2">
        <Router-link :to="`/job/${job.id}`" class="text-teal-600">
          See Details
        </Router-link>
        <Icon style="margin-top: 5px; color:#0d9488;" width="30" height="22" color="text-teal-600" icon="guidance:left-arrow" />
      </div>
    </li>
  </template>
  
  
  <script setup>
  import { Icon } from '@iconify/vue';
  const props = defineProps({
    job:{
        type:Object,
        required:true
        }
    });
  </script>