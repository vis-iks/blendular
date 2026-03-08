import { defineComponent, h } from 'vue';

export const IpoConstant = defineComponent({
  name: 'IpoConstant',
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
        h('path', {"d": "M850 100a50.005 50.005 0 0 0-50 50v1050H150a50.005 50.005 0 1 0 0 100h700a50.005 50.005 0 0 0 50-50V200h550a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
