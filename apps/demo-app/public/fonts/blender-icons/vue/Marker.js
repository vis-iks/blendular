import { defineComponent, h } from 'vue';

export const Marker = defineComponent({
  name: 'Marker',
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
        h('path', {"d": "M548.05 101.324a50.005 48.29 0 0 0-39.063 20.747L109.964 674.91a50.005 48.29 0 0 0-8.98 26.784l-.981 50.738a50.005 48.29 0 0 0 50 49.04h800a50.005 48.29 0 0 0 50-48.286V704.9a50.005 48.29 0 0 0-8.98-27.538l-400-555.29a50.005 48.29 0 0 0-42.973-20.748M550 234.11 889.062 704.9H210.156z", "fillRule": "evenodd"})
      ]
    );
  }
});
