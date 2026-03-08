import { defineComponent, h } from 'vue';

export const Group = defineComponent({
  name: 'Group',
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
        h('path', {"d": "M699.995 700c-135.23-1.91-135.23 201.913 0 200h200c135.23 1.91 135.23-201.913 0-200zm-500-100v750c0 27.613 22.39 49.997 50 50h1100c27.61-.003 50-22.387 50-50V600h-100v700h-1000V600zm1250-100c27.61-.003 50-22.387 50-50V150c0-27.613-22.39-49.997-50-50h-1300c-27.61.003-50 22.387-50 50v300c0 27.613 22.39 49.997 50 50zm-1250-300h1200v200h-1200z", "fillRule": "evenodd"})
      ]
    );
  }
});
