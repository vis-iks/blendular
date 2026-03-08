import { defineComponent, h } from 'vue';

export const EmptyData = defineComponent({
  name: 'EmptyData',
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
        h('path', {"d": "M549.214 99.262a50.005 50.005 0 0 0-49.219 50.78v879.298l-385.352 385.35a50.005 50.005 0 1 0 70.704 70.705l385.351-385.352h879.297a50.005 50.005 0 1 0 0-100h-850v-850a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"})
      ]
    );
  }
});
