<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup () {
        interface Member {
            id: number
            name: string
        }

        const userInfo: Member = reactive({
            id: 1,
            name: '张三'
        })

        // reactive 声明数组的方式
        const uids: number[] = reactive([1, 2, 3])
        
        // 读取用户名
        console.log(userInfo.name);
        userInfo.name = '李四'

        return {}
    }
})
</script>

<style scoped>

</style>