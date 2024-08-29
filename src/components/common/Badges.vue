<template>
    <div class="flex flex-wrap gap-2">
      <div 
        v-for="(item, index) in displayedBadges" 
        :key="index" 
        :class="`capitalize font-semibold text-white px-[17px] py-[5px] rounded-full text-sm`"
        :style="{ backgroundColor: `#${item.color}` }"
        >
        {{ item[choice] }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import {generateRandomColor} from '@/utils/';
  
  const props = defineProps({
    items: Array,
    shows: Number,
    choice:{
      type:String,
      default:'name'
    },
    from:{
      type:Number,
      default:0
    }
  });

  const displayedBadges = computed(() => {
  return props.items.slice(props.from, props.shows).map((item, index) => ({
    ...item,
    color: generateRandomColor()  // Generates a random hex color, avoiding #e2e8f0
  }));
});

  </script>
  
  <style>
  /* Additional styling if needed */
  </style>
  