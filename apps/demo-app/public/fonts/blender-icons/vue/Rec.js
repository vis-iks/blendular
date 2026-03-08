import { defineComponent, h } from 'vue';

export const Rec = defineComponent({
  name: 'Rec',
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
        h('path', {"d": "M900 500a400 400 0 0 1-400 400 400 400 0 0 1-400-400 400 400 0 0 1 400-400 400 400 0 0 1 400 400", "fillRule": "evenodd"})
      ]
    );
  }
});
