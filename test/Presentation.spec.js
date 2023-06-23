import { createLocalVue, shallowMount } from '@vue/test-utils'
import Presentation from '@/components/Presentation.vue'
import i18nMock from './i18nMock'


describe('Presentation', () => {
  const localVue = createLocalVue()
  localVue.prototype.$t = i18nMock.$t;

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Presentation, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
