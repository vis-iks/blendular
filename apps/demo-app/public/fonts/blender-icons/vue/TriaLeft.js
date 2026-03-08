import { defineComponent, h } from 'vue';

export const TriaLeft = defineComponent({
  name: 'TriaLeft',
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
        h('path', {"d": "M649.531 99.926c27.843 0 50.584 22.16 50.587 50v700c.059 40.51-45.545 64.27-78.712 41.02l-500-350c-28.541-19.9-28.541-62.14 0-82.04l500-350c8.26-5.8 18.06-8.9 28.125-9z", "fillRule": "evenodd"})
      ]
    );
  }
});
