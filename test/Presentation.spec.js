import { mount } from '@vue/test-utils'
import Presentation from '@/components/Presentation.vue'

describe('Presentation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Presentation)
    expect(wrapper.vm).toBeTruthy()
  })
})
