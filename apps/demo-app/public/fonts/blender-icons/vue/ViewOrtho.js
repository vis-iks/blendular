import { defineComponent, h } from 'vue';

export const ViewOrtho = defineComponent({
  name: 'ViewOrtho',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v1500a50.005 50.005 0 0 0 50 50h1500a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h400v400H200zm500 0h400v400H700zm500 0h400v400h-400zM200 700h400v400H200zm500 0h400v400H700zm500 0h400v400h-400zM200 1200h400v400H200zm500 0h400v400H700zm500 0h400v400h-400z", "fillRule": "evenodd"})
      ]
    );
  }
});
