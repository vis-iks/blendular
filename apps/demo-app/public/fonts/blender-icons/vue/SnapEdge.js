import { defineComponent, h } from 'vue';

export const SnapEdge = defineComponent({
  name: 'SnapEdge',
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
        h('path', {"d": "M1300 150c-.003-27.613-22.387-49.997-50-50H150c-27.613.003-49.997 22.387-50 50v200c.003 27.613 22.387 49.997 50 50h1100c27.613-.003 49.997-22.387 50-50zm0 900c-.003-27.613-22.387-49.997-50-50H150c-27.613.003-49.997 22.387-50 50v200c.003 27.613 22.387 49.997 50 50h1100c27.613-.003 49.997-22.387 50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
