import { defineComponent, h } from 'vue';

export const AreaDock = defineComponent({
  name: 'AreaDock',
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
        h('path', {"d": "M450.068 100c-27.61 0-50 22.386-50 50v999.762c0 27.61 22.39 50 50 50H1450c27.61 0 50-22.39 50-50V150c0-27.614-22.39-50-50-50zm50 100H1400v899.762H500.068z", "fillRule": "evenodd"}),
        h('path', {"d": "M200.004 400.098H300.01l.04-100H150.003c-27.614 0-50 22.386-50 50v1099.789c0 27.61 22.386 50 50 50H1250.25c27.614 0 50-22.39 50-50v-149.974s-100-.26-100 .17v99.8H200.004z", "fillRule": "evenodd"})
      ]
    );
  }
});
