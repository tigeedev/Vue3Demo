<template>
    <p ref="msg">请留意该节点，有一个 ref 属性</p>

    <!-- 子组件也用同样的方式添加 -->
    <Child ref="child" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Child from "./domChild.vue";

export default defineComponent({
    components: {
        Child
    },
    setup () {
        // 定义挂载节点
        const msg = ref<HTMLElement>()
        const child = ref<InstanceType<typeof Child>>()

        // 请保证视图渲染完毕后再执行节点操作 e.g. `onMounted` / `nextTick`
        onMounted(() => {
            // 获取 DOM 的文本
            console.log(msg.value.innerText);
            
            // 或者操作子组件里的数据
            child.value.isShowDialog = true
        })

        
        // 将需要在视图里使用的变量 return 出去
        return {
            msg,
            child
        }
    }
})
</script>

<style scoped>
    .msg {
        font-size: 14px;
    }
</style>