import Item from '../Item.vue'
import { createApp } from 'vue'

describe('Item.vue', ()=>{
   test('hung Item', ()=>{
    expect(true).toBe(true)
    console.log(Item)

    //check document Content
    const el = document.createElement('div')
    el.id = 'app'
    document.body.appendChild(el)
    const app = createApp(Item).mount('#app')

    console.log(document.body.outerHTML)

    expect(app.$el.textContent).toContain('item')
    }) 
})
