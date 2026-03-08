import { defineComponent, h } from 'vue';

export const Text = defineComponent({
  name: 'Text',
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
        h('path', {"d": "M149.995 100c-27.61 0-50 22.39-50 50v1300c0 27.61 22.39 50 50 50h50v-200h100v200h950c27.61 0 50-22.39 50-50V150c0-27.61-22.39-50-50-50h-950v200h-100V100zm350 200h600v100h-600zm-300 100h100v200h-100zm300 100h600v100h-600zm-300 200h100v200h-100zm300 0h600v100h-600zm0 200h400v100h-400zm-300 100h100v200h-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
