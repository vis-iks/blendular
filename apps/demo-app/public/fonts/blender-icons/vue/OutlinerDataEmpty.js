import { defineComponent, h } from 'vue';

export const OutlinerDataEmpty = defineComponent({
  name: 'OutlinerDataEmpty',
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
        h('path', {"d": "M549.219 99.256A50.005 50.005 0 0 0 500 150.037v879.297l-385.352 385.351a50.005 50.005 0 1 0 70.704 70.704l385.351-385.352H1450a50.005 50.005 0 1 0 0-100H600v-850a50.005 50.005 0 0 0-50.781-50.78", "fillRule": "evenodd"})
      ]
    );
  }
});
