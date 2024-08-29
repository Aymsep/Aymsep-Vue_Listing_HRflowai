<template>
    <Icon
      :icon="icon"
      :color="color" 
      :width="width" 
      :height="height"
      class="cursor-pointer"
      />
</template>

<script setup>
import { Icon } from '@iconify/vue';




const props = defineProps({
    icon:{
        type: String,
        required: true
    },
    color:{
        type: String,
        default: ''
    },
    width:{
        type: String,
        default: ''
    },
    height:{
        type: String,
        default: ''
    }
})

</script>

<style lang="scss" scoped>

</style>