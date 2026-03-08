import { defineComponent, h } from 'vue';

export const RadiobutOff = defineComponent({
  name: 'RadiobutOff',
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
        h('path', {"d": "M600.006 100c-275.55 0-500 224.45-500 500s224.45 500 500 500 500-224.45 500-500-224.45-500-500-500m0 100c221.506 0 400 178.494 400 400s-178.494 400-400 400-400-178.494-400-400 178.494-400 400-400", "fillRule": "evenodd"})
      ]
    );
  }
});
