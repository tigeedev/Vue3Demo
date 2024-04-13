<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from 'vue'

export default defineComponent({
    setup () {
        interface Member {
            name: string
            age: number
        }

        const userInfo: Member = reactive({
            name: '张三',
            age: 18
        })

        // 转换 name 这个字段为 Ref 变量
        const name = toRef(userInfo, 'name')
        console.log(name.value);
        
        // 修改 Ref 变量的值，两者同步更新
        name.value = 'lisi'
        console.log(name.value);
        console.log(userInfo.name);
        
        // 修改 Reactive 对象上该属性的值，两者也是同步更新
        userInfo.name = 'wangwu'
        console.log(name.value);
        console.log(userInfo.name);
        

        // 设置默认值
        interface Member2 {
            name: string
            age: number
            // 类型上新增一个属性，因为是可选的，因此默认值会是 `undefined`
            sex?: string
        }

        // 声明变量时省略 `age` 属性
        const userInfo2: Member2 = reactive({
            name: '张三',
            age: 20
        })

        // 此时为了避免程序运行错误，可以指定一个初始值
        // 但初始值仅对 Ref 变量有效，不会影响 Reactive 字段的值
        const sex = toRef(userInfo2, 'sex', '男')
        console.log(sex.value); //男
        console.log(userInfo2.sex); //undefined
        
        // 除非重新赋值，才会使两者同时更新
        sex.value = '女'
        console.log(sex.value);//女
        console.log(userInfo2.sex);//女

        return {}
    }
})
</script>

<style scoped>

</style>