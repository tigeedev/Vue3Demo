<template>
    <div>
        {{ msg }}
        <domChild></domChild>
    </div>
</template>

<script setup lang="ts">
    // 子组件导入即可使用
    import domChild from './dom.vue'

    defineProps(['name','userInfo'])

    const props = defineProps(['name','userInfo'])

    // 对每个 prop 进行类型检查
    defineProps({
        name: String,
        userInfo: Object
    })

    console.log(props.name);

    // emits 的接收方式变化
    // 获取 emits
    const emit = defineEmits(['update-name'])
    
    // 调用 emit
    emit('update-name', 'Robert')


    const msg = 'Hello'

    // 通过该 API 显式暴露的数据，才可以在父组件拿到
    defineExpose({
        msg
    })

    // 顶级 await 的支持
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const json = await res.json()

</script>

<style scoped>

</style>