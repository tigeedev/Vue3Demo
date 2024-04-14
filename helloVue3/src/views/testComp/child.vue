<template>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        // 可选，并提供默认值
        title: {
            type: String,
            required: false,
            default: '标题'
        },

        // 默认可选，单类型
        index: Number,
        
        // 添加自定义校验
        userName: {
            type: String,

            // 在这里校验用户名必须至少 3 个字
            validator: (v) => v.length >= 5
        },

        uid: [String, Number]
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>