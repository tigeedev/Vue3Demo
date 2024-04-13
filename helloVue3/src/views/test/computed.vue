<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
    setup () {
        // 定义基本的数据
        const firstName = ref<string>('wang')
        const lastName = ref<string>('xiaoming')

        // 定义需要计算拼接结果的数据
        const fullName = computed(() => `${firstName.value} ${lastName.value}`)

        // 2s后改变firstName的值
        setTimeout(() => {
            firstName.value = 'zhang'
        }, 2000)

        return {
            fullName
        }
    }
})
</script>

<style scoped>

</style>