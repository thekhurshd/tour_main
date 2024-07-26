<template>
    <div>
        <component :is="getIcon(`${props.name}`)" :class="props.className" :filled="true" :fontControlled="true" />
    </div>
</template>

<script setup>
const getIcon = (id) => defineAsyncComponent(() => import(`~/assets/icons/${id}.svg`));
const props  = defineProps({
    className:{
        type:String,default:''
    },
    name:{
        type:String,default:''
    },
    w:{
        type:String,default:'auto'
    },
    h:{
        type:String,default:'auto'
    }
})

</script>

<style lang="scss" scoped>

</style>