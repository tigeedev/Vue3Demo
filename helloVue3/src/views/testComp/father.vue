<template>
    <child 
        title="父组件传值给子组件"
        :index="1"
        :uid="userInfo.id"
        :user-name="userInfo.name"
    />

    <!-- 用 v-model 传递数据 -->
    <child 
        v-model:index="userInfo.id"
        v-model:username="userInfo.name"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  child from './child.vue'

interface Member {
    id: number
    name: string
}

export default defineComponent({
    components: {
        child
    },
    setup () {
        const userInfo: Member = {
            id: 1,
            name: '张三'
        }

        return {
            userInfo
        }
    }
})
</script>

<style scoped>

</style>