import { defineComponent, h } from 'vue';

export const AlignRight = defineComponent({
  name: 'AlignRight',
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
        h('path', {"d": "M150.293 100a50.005 50.005 0 1 0 0 100h1299.414a50.005 50.005 0 1 0 0-100zm700 300a50.005 50.005 0 1 0 0 100h599.414a50.005 50.005 0 1 0 0-100zm-700 300a50.005 50.005 0 1 0 0 100h1299.414a50.005 50.005 0 1 0 0-100zm700 300a50.005 50.005 0 1 0 0 100h599.414a50.005 50.005 0 1 0 0-100zm-700 300a50.005 50.005 0 1 0 0 100h1299.414a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
