import { defineComponent, h } from 'vue';

export const NodeTexture = defineComponent({
  name: 'NodeTexture',
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
        h('path', {"d": "M150 1500a50.005 50.005 0 0 1-50-50V150a50.005 50.005 0 0 1 50-50h1300a50.005 50.005 0 0 1 50 50v1300a50.005 50.005 0 0 1-50 50zm50-100h1200V899.414l-100 .6v-200l100-.6V499.219h-100.586l.6 200.781h-200l-.6-200.781h-200l.6 200.781h-200l-.6-200.781h-200l.6 200.781h-200l-.6-200.781H200V699.61l100 .6v200l-100-.6zm300-700h200v200H500zm400 0h200v200H900z", "fillRule": "evenodd"}),
        h('path', {"d": "M300 1100V900h200v200zm400 0V900h200v200zm400 0V900h200v200z", "fillRule": "evenodd"})
      ]
    );
  }
});
