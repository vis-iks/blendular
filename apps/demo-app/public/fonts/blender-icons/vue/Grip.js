import { defineComponent, h } from 'vue';

export const Grip = defineComponent({
  name: 'Grip',
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
        h('path', {"d": "M1000.012 400h100v100h-100zm-300 0h100v100h-100zm-300 0h100v100h-100zm-300 0h100v100h-100zm900-300h100v100h-100zm-300 0h100v100h-100zm-300 0h100v100h-100zm-300 0h100v100h-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
