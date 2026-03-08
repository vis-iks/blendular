import { defineComponent, h } from 'vue';

export const SelectSubtract = defineComponent({
  name: 'SelectSubtract',
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
        h('path', {"d": "M99.991 500.586v200h100v-100h100v-100zm0 400v200h100v-200zm0 400v200h200v-100h-100v-100zm900 0v100h-100v100h200v-200zm-500 100v100h200v-100zM549.209 99.414c-27.689.003-50.105 22.506-50 50.195l.8 400.586c.003 27.613 22.387 49.997 50 50h450v450.195c.003 27.613 22.387 49.997 50 50h400c27.613-.003 49.997-22.387 50-50v-900c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
