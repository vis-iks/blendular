import { defineComponent, h } from 'vue';

export const CurvePath = defineComponent({
  name: 'CurvePath',
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
        h('path', {"d": "M1449.179 99.458a50 50 0 0 0-34.375 15.039l-1000 1000a50.005 50.005 0 1 0 70.704 70.704l1000-1000a50.005 50.005 0 0 0-36.329-85.743", "fillRule": "evenodd"}),
        h('path', {"d": "M1150.156 99.849a50.005 50.005 0 1 0 0 100h250v250a50.005 50.005 0 1 0 100 0v-300a50.005 50.005 0 0 0-50-50zm-500 500a50.005 50.005 0 1 0 0 100h250v250a50.005 50.005 0 1 0 100 0v-300a50.005 50.005 0 0 0-50-50zm-500 500a50.005 50.005 0 1 0 0 100h250v250a50.005 50.005 0 1 0 100 0v-300a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
