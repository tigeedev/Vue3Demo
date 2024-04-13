<template>
    <p>{{ msg }}</p>

    <button @click="updateMsg">修改msg</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    setup () {
      const msg = ref('hello world')

      // 这个要暴漏给模板使用，必须 return 出去才行
      function updateMsg() {
        msg.value = 'hello vue3'
      }
      
      // 这个要在页面载入时执行，无需 return
      const init = () => {
        console.log('init');
      }
      
      onMounted(() => {
        init()
      })

      return {
        msg,
        updateMsg
      }
    }
})
</script>

<style scoped>

</style>