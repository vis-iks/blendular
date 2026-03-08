import { defineComponent, h } from 'vue';

export const SnapPeelObject = defineComponent({
  name: 'SnapPeelObject',
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
        h('path', {"d": "M150 100c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h1300c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zm50 100h1200v200H200zm-50 900c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h1300c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50zm50 100h1200v200H200z", "fillRule": "evenodd"}),
        h('path', {"d": "M1000.001 800A200 200 0 0 1 800 1000.001 200 200 0 0 1 599.999 800 200 200 0 0 1 800 599.999 200 200 0 0 1 1000.001 800", "fillRule": "evenodd"})
      ]
    );
  }
});
