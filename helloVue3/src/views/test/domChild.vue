<template>
    <p class="msg"></p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        // 在 setup 方法里面声明变量
        const msg = ref<string>('hi~')

        setTimeout(() => {
            msg.value = '修改值'
        }, 1000);

        const data = ref<string[]>([])

        // 提取接口数据
        data.value = api.data.map((item: any) => item.text)
        
        // 将需要在视图里使用的变量 return 出去
        return {}
    }
})
</script>

<style scoped>

</style>