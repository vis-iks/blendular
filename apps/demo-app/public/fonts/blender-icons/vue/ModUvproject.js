import { defineComponent, h } from 'vue';

export const ModUvproject = defineComponent({
  name: 'ModUvproject',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        
        class: `bl-icons ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "m1450 100-900.781.8a50.005 50.005 0 0 0-50 50.781l3.91 249.219 100-1.56-3.12-198.438 800-.8-.6 801.172-200 1.95 1 100 249.414-2.34a50.005 50.005 0 0 0 49.414-50L1500 150a50.005 50.005 0 0 0-50-50", "fillRule": "evenodd"}),
        h('path', {"d": "M100 500v200h200V500zm200 200v200h200V700zm200 0h200V500H500zm200 0v200h200V700zm200 0h200V500H900zm0 200v200h200V900zm0 200H700v200h200zm0 200v200h200v-200zm-200 0H500v200h200zm-200 0v-200H300v200zm-200 0H100v200h200zm0-200V900H100v200zm200 0h200V900H500z", "fillRule": "evenodd"})
      ]
    );
  }
});
