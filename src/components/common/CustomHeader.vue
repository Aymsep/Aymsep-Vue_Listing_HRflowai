
<script setup>

const props = defineProps({
    text:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: 'h1'
    },
    customClass:{
        type: String,
        default: ''
    }
})



</script>



<template>
    <header>
        <component :is="tag" :class="customClass" >
            {{text}}
        </component>
        
    </header>
</template>
