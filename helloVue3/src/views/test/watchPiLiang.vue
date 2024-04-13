<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    setup () {
        const name = ref<string>('')
        const number = ref<number>(0)

        setTimeout(() => {
            name.value = '123'
            number.value++
        }, 2000);

        // 批量侦听
        watch(
            [name, number], 
            ([newName, newNumber], [oldName, oldNumber]) => {
            console.log("name的变化", newName, oldName);
            console.log("number的变化", newNumber, oldNumber);
        })

        return {}
    }
})
</script>

<style scoped>

</style>