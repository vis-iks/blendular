import { defineComponent, h } from 'vue';

export const ClipuvDehlt = defineComponent({
  name: 'ClipuvDehlt',
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
        h('path', {"d": "M150 100c-27.613.003-49.997 22.387-50 50v1300c.003 27.613 22.387 49.997 50 50h1300c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zm650 300c220.237 0 400 179.764 400 400 0 220.237-179.763 400-400 400-220.236 0-400-179.763-400-400 0-220.236 179.764-400 400-400", "fillRule": "evenodd"})
      ]
    );
  }
});
