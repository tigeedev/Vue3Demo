<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, toRefs } from 'vue'

export default defineComponent({
    setup () {
        // 声明数据状态类型
        interface CalculatorState {
            num: number //用来计算操作的数据
            step: number //每次计算要增加的幅度
        }

        // 声明一个使用计算器的函数
        function useCalculator() {
            // 通过数据状态中心的形式，集中管理内部变量
            const state: CalculatorState = reactive({
                num: 0,
                step: 10
            })

            // 功能函数也通过数据中心变量去调用
            function add() {
                state.num += state.step
            }

            return {
                add,
                ...toRefs(state)
            }
        }

        // 解构出来的 `num` 和 `step` 都是 Ref 变量
        const { add, num, step } = useCalculator()
        console.log(num.value);
        console.log(step.value);

        add()

        return {}
    }
})
</script>

<style scoped>

</style>