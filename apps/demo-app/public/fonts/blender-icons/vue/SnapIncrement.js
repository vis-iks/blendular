import { defineComponent, h } from 'vue';

export const SnapIncrement = defineComponent({
  name: 'SnapIncrement',
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
        h('path', {"d": "M100.04 699.999v700h100v-300h200v100h100v-100h200v300h100v-300h200v100h100v-100h200v300h100v-700h-100v300h-200v-100h-100v100h-200v-300h-100v300h-200v-100h-100v100h-200v-300z", "fillRule": "evenodd"}),
        h('path', {"d": "M1449.959 499.999c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50h-300c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50z", "fillRule": "evenodd"})
      ]
    );
  }
});
