import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: 'hello world',
    // 通过 as 关键字指定 TS 类型
    randomMessage: [] as string[],
    // 或者使用尖括号 <> 来指定
    // randomMessage2: <string[]>[],
  }),
  getters: {
    fullMessage: (state) => `The message is "${state.message}".`,
    // 这个 getter 返回了另外一个 getter 的结果
    emojiMessage(): string {
      return `🎉🎉🎉${this.fullMessage}`
    }
  },
  actions: {
    // 异步更新 message
    async updateMessage(newMessage: string): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          // this 指的是当前的 store 实例
          this.message = newMessage
          resolve('Asycn done')
        }, 3000)
      })
    },

    // 同步更新 message
    updateMessageSync(newMessage: string): string{
      this.message = newMessage
      return 'Sync done'
    }
  },
})
