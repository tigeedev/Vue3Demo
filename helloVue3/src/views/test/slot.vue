<template>
    <Child>
        <template #title>
            <div>这是title</div>
        </template>

        <template #content>
            <div>这是content</div>
        </template>
    </Child>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Child from './slotChild.vue'

export default defineComponent({
    components: {
        Child
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>