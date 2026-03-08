import { defineComponent, h } from 'vue';

export const OutlinerObGroupInstance = defineComponent({
  name: 'OutlinerObGroupInstance',
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
        h('path', {"d": "M1450.005 100c27.61.003 50 22.387 50 50v200c0 27.613-22.39 49.997-50 50h-1100c-27.61-.003-50-22.387-50-50V150c0-27.613 22.39-49.997 50-50zm-50 400v650c0 27.613-22.39 49.997-50 50h-900c-27.61-.003-50-22.387-50-50V500zm-400 100h-200c-135.23-1.91-135.23 201.913 0 200h200c135.23 1.91 135.23-201.913 0-200", "fillRule": "evenodd"}),
        h('path', {"d": "M200.005 300v50c0 62.337 44.68 106.807 100 128.906V600h-150c-27.61-.003-50-22.387-50-50V350c0-27.613 22.39-49.997 50-50zm100 400v450c0 81.67 68.35 149.991 150 150h750v50c0 27.613-22.39 49.997-50 50h-900c-27.61-.003-50-22.387-50-50V700z", "fillRule": "evenodd"})
      ]
    );
  }
});
