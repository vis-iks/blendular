import { defineComponent, h } from 'vue';

export const ClipuvHlt = defineComponent({
  name: 'ClipuvHlt',
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
        h('path', {"d": "M799.998 399.999c-220.236 0-400 179.764-400 400 0 220.237 179.764 400 400 400 220.237 0 400-179.763 400-400 0-220.236-179.763-400-400-400", "fillRule": "evenodd"}),
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h1200v1200H200z", "fillRule": "evenodd"})
      ]
    );
  }
});
