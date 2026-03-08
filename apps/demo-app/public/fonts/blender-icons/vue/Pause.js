import { defineComponent, h } from 'vue';

export const Pause = defineComponent({
  name: 'Pause',
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
        h('path', {"d": "M100.005 100v1200h200V100zm600 0v1200h200V100z", "fillRule": "evenodd"})
      ]
    );
  }
});
