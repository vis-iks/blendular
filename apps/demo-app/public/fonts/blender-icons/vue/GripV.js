import { defineComponent, h } from 'vue';

export const GripV = defineComponent({
  name: 'GripV',
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
        h('path', {"d": "M200.012 999.956v100h-100v-100zm0-300v100h-100v-100zm0-300v100h-100v-100zm0-300v100h-100v-100zm300 900v100h-100v-100zm0-300v100h-100v-100zm0-300v100h-100v-100zm0-300v100h-100v-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
