<template>
   <ol class="flex items-center whitespace-nowrap">
  <li class="inline-flex items-center">
    <Router-Link to="/" class="flex items-center text-sm text-teal-600 hover:text-teal-400 focus:outline-none focus:text-teal-700 dark:text-teal-600 dark:hover:text-blue-500 dark:focus:text-teal-600" href="#">
      Home
    </Router-Link>
    <svg class="shrink-0 mx-2 size-4 text-teal-600 dark:text-teal-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  </li>
  <li class="text-sm">
    <div class="flex items-center text-teal-600 dark:text-teal-600">
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
      <svg class="shrink-0 mx-2 size-4 text-teal-600 dark:text-teal-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </div>
  </li>
  <li class="inline-flex items-center text-sm font-semibold text-teal-600 truncate dark:text-teal-600" aria-current="page">
    {{Jobname}}
  </li>
</ol>
</template>

<script setup>
const props = defineProps({
    Jobname: {
        type: String,
        required: true,
        default: 'Job'
    }
})

</script>

