import { defineComponent, h } from 'vue';

export const SeqHistogram = defineComponent({
  name: 'SeqHistogram',
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
        h('path', {"d": "M1000 100v400H800v300H700V600H600v500H500V900H400v356.054H300v-208.593H200v252.538H100v200h1400v-242.187h-100V800h-100v200h-100V400h-100V100z", "fillRule": "evenodd"})
      ]
    );
  }
});
