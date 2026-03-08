import { defineComponent, h } from 'vue';

export const Cube = defineComponent({
  name: 'Cube',
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
        h('path', {"d": "M450.638 99.766a50 50 0 0 0-35.352 14.648l-300 300a50 50 0 0 0-14.648 35.352v1000a50.005 50.005 0 0 0 50 50h1000a50 50 0 0 0 35.352-14.648l300-300a50 50 0 0 0 14.648-35.352v-1000a50.005 50.005 0 0 0-50-50zm20.703 100h858.008l-199.414 200H271.341zm929.297 70.117v859.18l-200 200V470.274zm-1200 229.883h900v900h-900z", "fillRule": "evenodd"}),
        h('path', {"d": "M449.857 98.273a50.005 50.005 0 0 0-49.219 50.781v979.297l-285.352 286.133a50.005 50.005 0 1 0 70.704 70.508l285.351-285.938h979.297a50.005 50.005 0 1 0 0-100h-950v-950a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"})
      ]
    );
  }
});
