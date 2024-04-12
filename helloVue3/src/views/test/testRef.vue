<template>
    <p class="msg">{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        // 字符串
        const msg = ref<string>('hello world!')

        // 数值
        const count = ref<number>(1)

        // 布尔值
        const isVip = ref<boolean>(false)

        // 引用类型  - 先声明对象的格式
        interface Member {
            id: number
            name: string
        }
        // 在定义对象时指定该类型
        const xiaoming = ref<Member>({
            id: 11,
            name: 'xiaoming'
        })

        // 定义一个普通数组：
        const uids = ref<number[]>([1,2,3])

        // 定义一个对象数组：
        const memberList = ref<Member[]>([{
            id: 11,
            name: 'xiaoming'
        },{
            id: 22,
            name: 'xiaohua'
        }])

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