<template>
  <div>
    测试Pinia
  </div>
</template>

<script setup lang="ts">
  import { computed, toRefs, toRef } from 'vue'
  import { useMessageStore } from '@/stores/testStore'
  import { storeToRefs } from 'pinia'
  
  // const store = useMessageStore()

  //可以直接更新
  // store.message = 'New Message'



  // 使用 computed API - 无法直接更新值
  // const message = computed(() => store.message)
  // message.value = '111' //提示值为只读
  // console.log(message.value)

  // // 如果要更新数据，则需要在定义 computed 变量的时候配置 getter 和 setter
  // const message = computed({
  //   //getter 是返回数据的值
  //   get: () => store.message, 

  //   // setter 是赋值后的行为
  //   set(newVal) {
  //     store.message = newVal
  //   }
  // })

  // // 这时就可以修改 对应的值了
  // message.value = 'new message1'
  // console.log(store.message)

  
  // 使用 storeToRefs API - 通过 storeToRefs 拿到响应性的 message
  // const { message } = storeToRefs(store)
  // message.value = 'new message'
  // console.log(message.value)


  // 使用 toRefs API - 用法同 storeToRefs API
  // const { message } = toRefs(store)
  // message.value = 'new message'
  // console.log(message.value)

  // 只提取 state 上的数据
  // const { message } = toRefs(store.$state)
  // console.log(message)


  // 批量更新 state
  // console.log(JSON.stringify(store.$state)); //输出 {"message":"hello world","randomMessage":[]}
  
  /**
   * 注意这里，传入了一个对象
   * 只允许修改已有数据，不能提交未定义的数据进去
   */
  // store.$patch({
  //   message: 'New Message',
  //   randomMessage: ['msg1', 'msg2']
  // })
  // console.log(JSON.stringify(store.$state));

  /**
   * 注意这里，这次是传入了一个函数
   * 同样只允许修改已有数据，不能提交未定义的数据进去
   */
  // store.$patch((state) => {
  //   state.message = 'new message'

  //   for(let i = 0; i < 3; i++) {
  //     state.randomMessage.push(`msg${i+1}`)
  //   }
  // })
  // console.log(JSON.stringify(store.$state));


  // // 全量更新 state
  // store.$state = {
  //   message: 'new messagge',
  //   randomMessage: ['msg1', 'msg2']
  // }
  // console.log(JSON.stringify(store.$state)); // 输出 {"message":"new messagge","randomMessage":["msg1","msg2"]}

  // // 3s 后重置状态
  // setTimeout(() => {
  //   store.$reset()
  //   console.log(JSON.stringify(store.$state)); // 输出最开始的 Hello World
  // }, 3000);


  /**
   * 订阅 state
   * 可以在 state 变化时，更新本地持久化存储的数据
   */
  // store.$subscribe((mutation, state) => {
  //   localStorage.setItem('store', JSON.stringify(state))
  // })


  /**
   * 调用 action
   * 在 Pinia 中只要像普通的函数一样使用即可，不需要和 Vuex 一样调用 commit 或者 dispatch。
   */
  const store = useMessageStore()
  const { message } = storeToRefs(store)

  // 立即执行
  console.log(store.updateMessageSync('New message by Sycn'));
  
  // 3s 后执行
  store.updateMessage('New message by async').then((res) => {
    console.log(res);
  })

</script>

<style scoped>

</style>