<template>
    <button
      :class="` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`"
      @click="$emit('clickB')"
      :style="`background-color:${color}`"
      >
      <slot>{{ text }}</slot> <!-- Allows content to be inserted -->
    </button>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'blue'
    },
    text:{
        type: String,
        default: 'Click me'
    }
})

</script>

<style lang="scss" scoped>

</style>