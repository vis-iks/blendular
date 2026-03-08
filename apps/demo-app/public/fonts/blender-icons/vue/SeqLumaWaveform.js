import { defineComponent, h } from 'vue';

export const SeqLumaWaveform = defineComponent({
  name: 'SeqLumaWaveform',
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
        h('path', {"d": "M100 100v200h200V100zm200 400v200h200V500zm200 300v200h200V800zm300 300v200h150v100h250v100h300v-200h-300v-100h-200v-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
