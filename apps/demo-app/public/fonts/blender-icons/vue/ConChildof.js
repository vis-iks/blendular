import { defineComponent, h } from 'vue';

export const ConChildof = defineComponent({
  name: 'ConChildof',
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
        h('path', {"d": "M349.219 499.219A50.005 50.005 0 0 0 300 550v300a50.005 50.005 0 1 0 100 0V550a50.005 50.005 0 0 0-50.781-50.781m0 500A50.005 50.005 0 0 0 300 1050v200a50.005 50.005 0 0 0 50 50h200a50.005 50.005 0 1 0 0-100H400v-150a50.005 50.005 0 0 0-50.781-50.781M750 1200a50.005 50.005 0 1 0 0 100h300a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M1050 1000a50.005 50.005 0 0 0-50 50v400a50.005 50.005 0 0 0 50 50h400a50.005 50.005 0 0 0 50-50v-400a50.005 50.005 0 0 0-50-50zm50 100h300v300h-300z", "fillRule": "evenodd"}),
        h('path', {"d": "M150 100c-27.613.003-49.997 22.387-50 50v400c.003 27.613 22.387 49.997 50 50h400c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
