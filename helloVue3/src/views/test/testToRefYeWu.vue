<template>
    <ul class="user-info">
        <li class="item">
            <span class="key">id:</span>
            <span class="value">{{ id }}</span>
        </li>
        <li class="item">
            <span class="key">name:</span>
            <span class="value">{{ name }}</span>
        </li>
        <li class="item">
            <span class="key">age:</span>
            <span class="value">{{ age }}</span>
        </li>
        <li class="item">
            <span class="key">gender:</span>
            <span class="value">{{ gender }}</span>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface Member {
    id: number,
    name: string,
    age: number,
    gender: string
}

export default defineComponent({
    setup () {
        // 定义一个 reactive 对象
        const userInfo = reactive({
            id: 1,
            name: '张三',
            age: 18,
            gender: '男',
        })

        // 定义一个新对象，它本身没有响应性，但是它的字段全部是 Ref 变量
        const userInfoRefs = toRefs(userInfo)

        // 在 2s 后更新 `userInfo`
        setTimeout(() => {
            userInfo.id = 2
            userInfo.gender = '女'
            userInfo.age = 19
            userInfo.name = '李四'
        }, 2000)

        // 在这里解构 toRefs 对象才能继续保持响应性
        return {
            ...userInfoRefs
        }
    }
})
</script>

<style scoped>

</style>