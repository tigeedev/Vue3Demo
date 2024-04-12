<template>
    <p class="msg">{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        // 在 setup 方法里面声明变量
        const msg = 'hello world!'
        
        // 将需要在视图里使用的变量 return 出去
        return {
            msg,
        }
    }
})
</script>

<style scoped>
    .msg {
        font-size: 14px;
    }
</style>