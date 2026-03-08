import { defineComponent, h } from 'vue';

export const IpoLinear = defineComponent({
  name: 'IpoLinear',
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
        h('path', {"d": "M1350 100a50 50 0 0 0-35.352 14.648L229.297 1200H150a50.005 50.005 0 1 0 0 100h100a50 50 0 0 0 35.352-14.648L1370.703 200H1450a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
