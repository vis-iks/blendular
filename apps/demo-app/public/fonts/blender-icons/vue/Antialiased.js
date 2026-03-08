import { defineComponent, h } from 'vue';

export const Antialiased = defineComponent({
  name: 'Antialiased',
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
        h('path', {"d": "M800 100.006c-385.42 0-700 314.58-700 700s314.58 700 700 700 700-314.58 700-700-314.58-700-700-700m0 200c277.332 0 500 222.668 500 500s-222.668 500-500 500-500-222.668-500-500 222.668-500 500-500", "fillRule": "evenodd"})
      ]
    );
  }
});
