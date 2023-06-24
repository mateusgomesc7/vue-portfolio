import { createLocalVue, shallowMount } from '@vue/test-utils'
import Presentation from '@/components/Presentation.vue'
import i18nMock from './i18nMock'


describe('Presentation', () => {
  const localVue = createLocalVue()
  localVue.prototype.$t = i18nMock.$t;
  
  const stubs = {
    VCard: {
      name: 'v-card',
      template: '<div class="v-card-stub"></div>'
    }
  }
  
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(Presentation, {
      localVue,
      stubs,
      mocks: {
        $vuetify: { breakpoint: { mobile: 1 } },
        localePath: i => i
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
