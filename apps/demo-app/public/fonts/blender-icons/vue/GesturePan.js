import { defineComponent, h } from 'vue';

export const GesturePan = defineComponent({
  name: 'GesturePan',
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
        h('path', {"d": "M799.988 99.711 1100.42 399.91l-200.597.343-.103 199.824-199.823-.065-.003-199.8-200.253-.007zM800.067 1500.074l-300.149-299.915 200.032-.06.103-200.107 199.822.065.003 200.082 199.97.01z", "fillRule": "evenodd"})
      ]
    );
  }
});
