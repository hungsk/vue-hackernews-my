import Item from '../Item.vue'
import { createApp } from 'vue'
import { mount  } from '@vue/test-utils'

describe('Item.vue', ()=>{
   test('hung Item', ()=>{
    expect(true).toBe(true)
    console.log(Item)

    //check document Content(Diy)
    const el = document.createElement('div')
    el.id = 'app'
    document.body.appendChild(el)
    const app = createApp(Item).mount('#app')


    console.log(document.body.outerHTML)

    expect(app.$el.textContent).toContain('item')

    //check document Content(Use Vue Test Utils 掛載完整組件樹mount)
    const wrapper = mount(Item)
    expect(wrapper.text()).toContain('item')
    expect(wrapper.vm.$el.textContent).toContain('item')

  
    //check document Content(Use Vue Test Utils 掛載第一層組件樹shallowMount )
    //const wrapper1 = shallowMount(Item)
    // expect(wrapper1.text()).toContain('item')
    }) 
})
