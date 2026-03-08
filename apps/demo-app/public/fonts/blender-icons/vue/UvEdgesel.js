import { defineComponent, h } from 'vue';

export const UvEdgesel = defineComponent({
  name: 'UvEdgesel',
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
        h('path', {"d": "M600.337 150c.003-27.613 22.387-49.997 50-50h200c27.613.003 49.997 22.387 50 50v800c-.003 27.613-22.387 49.997-50 50h-200c-27.613-.003-49.997-22.387-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M100.337 250c.003-27.613 22.387-49.997 50-50h350v100h-300v500h300v100h-300v500h500v-300h100v350c-.003 27.613-22.387 49.997-50 50h-600c-27.613-.003-49.997-22.387-50-50zm900-50 349.327.49c27.613.003 49.997 22.387 50 50v600c-.003 27.537-22.268 49.89-49.805 50l-350 .19-.2-100h300v-500l-299.132-.68z", "fillRule": "evenodd"})
      ]
    );
  }
});
