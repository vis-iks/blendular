import { defineComponent, h } from 'vue';

export const Remove = defineComponent({
  name: 'Remove',
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
        h('path', {"d": "M949.976 500a50.025 50.025 0 1 1 0 100.05H150.024a50.025 50.025 0 1 1 0-100.05z", "fillRule": "evenodd"})
      ]
    );
  }
});
