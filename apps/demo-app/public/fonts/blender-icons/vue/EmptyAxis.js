import { defineComponent, h } from 'vue';

export const EmptyAxis = defineComponent({
  name: 'EmptyAxis',
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
        h('path', {"d": "M749.219 99.256A50.005 50.005 0 0 0 700 150.037v679.297l-385.352 385.351a50.005 50.005 0 1 0 70.704 70.704l385.351-385.352H1450a50.005 50.005 0 1 0 0-100H800v-650a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"}),
        h('path', {"d": "M1149.023 399.646a50 50 0 0 0-34.375 15.039l-200 200a50.005 50.005 0 1 0 70.704 70.704l200-200a50.005 50.005 0 0 0-36.329-85.743M150 800.037a50.005 50.005 0 1 0 0 100h325a50.005 50.005 0 1 0 0-100zm599.219 274.219A50.005 50.005 0 0 0 700 1125.037v325a50.005 50.005 0 1 0 100 0v-325a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"})
      ]
    );
  }
});
