import { defineComponent, h } from 'vue';

export const Aliased = defineComponent({
  name: 'Aliased',
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
        h('path', {"d": "M500 100v200h600V100zm600 200v200h200V300zm200 200v600h200V500zm0 600h-200v200h200zm-200 200H500v200h600zm-600 0v-200H300v200zm-200-200V500H100v600zm0-600h200V300H300z", "fillRule": "evenodd"})
      ]
    );
  }
});
