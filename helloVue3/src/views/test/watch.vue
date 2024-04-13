<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'

export default defineComponent({
    setup () {
        // 定义一个响应式数据
        const userInfo = reactive({
            name: '张三',
            age: 18
        })

        // 2s后改变数据
        setTimeout(() => {
            userInfo.name = '李四'
        }, 2000)

        /**
         * 可以直接侦听这个响应式对象
         * callback 的参数如果不用可以省略
         */

        watch(userInfo, () => {
            console.log('侦听整个 userInfo ', userInfo.name)
        })

        /**
         * 也可以侦听对象里面的某个值
         * 此时数据源需要写成 getter 函数
         */
        watch(()=>userInfo.name, (newVal, oldVal) => {
            console.log('只侦听 name 的变化 ', userInfo.name)
            console.log('打印变化前后的值', { newVal, oldVal })
        })

        return {}
    }
})
</script>

<style scoped>

</style>