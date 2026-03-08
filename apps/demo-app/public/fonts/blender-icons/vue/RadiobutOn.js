import { defineComponent, h } from 'vue';

export const RadiobutOn = defineComponent({
  name: 'RadiobutOn',
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
        h('path', {"d": "M600.006 100c-275.55 0-500 224.45-500 500s224.45 500 500 500 500-224.45 500-500-224.45-500-500-500", "fillRule": "evenodd"})
      ]
    );
  }
});
