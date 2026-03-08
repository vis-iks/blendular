import { defineComponent, h } from 'vue';

export const Matplane = defineComponent({
  name: 'Matplane',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h1200v1200H200z", "fillRule": "evenodd"})
      ]
    );
  }
});
