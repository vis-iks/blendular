import { defineComponent, h } from 'vue';

export const NodeCompositing = defineComponent({
  name: 'NodeCompositing',
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
        h('path', {"d": "M550.003 100.01a50.005 50.005 0 0 0-50 50v900a50.005 50.005 0 0 0 50 50h900a50.005 50.005 0 0 0 50-50v-900a50.005 50.005 0 0 0-50-50zm50 100h800v800h-800z", "fillRule": "evenodd"}),
        h('path', {"d": "M349.222 299.229a50.005 50.005 0 0 0-49.219 50.781v900a50.005 50.005 0 0 0 50 50h900a50.005 50.005 0 1 0 0-100h-850v-850a50.005 50.005 0 0 0-50.781-50.781m-200 200a50.005 50.005 0 0 0-49.219 50.781v900a50.005 50.005 0 0 0 50 50h900a50.005 50.005 0 1 0 0-100h-850v-850a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"}),
        h('path', {"d": "M1448.441 100.01c-12.717.4-24.8 5.64-33.79 14.648l-900 900c-31.479 31.5-9.18 85.335 35.352 85.352h900c27.613-.003 49.997-22.387 50-50v-900c.011-28.235-23.341-50.879-51.562-50", "fillRule": "evenodd"})
      ]
    );
  }
});
