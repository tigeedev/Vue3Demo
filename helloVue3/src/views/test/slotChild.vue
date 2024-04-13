<template>
    <div class="title">
        <slot name="title"></slot>
    </div>

    <div class="author">
        <slot name="author"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>