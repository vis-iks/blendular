import { defineComponent, h } from 'vue';

export const OutlinerObEmpty = defineComponent({
  name: 'OutlinerObEmpty',
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
        h('path', {"d": "M647.676 97.846a150.015 150.015 0 0 0-147.656 152.15v637.89L143.965 1243.94a150.015 150.015 0 1 0 212.11 212.11l356.054-356.055h637.891a150.015 150.015 0 1 0 0-300h-550v-550A150.015 150.015 0 0 0 647.676 97.846", "fillRule": "evenodd"})
      ]
    );
  }
});
