import { defineComponent, h } from 'vue';

export const SeqChromaScope = defineComponent({
  name: 'SeqChromaScope',
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
        h('path', {"d": "M700 100a50 50 0 0 0-24.023 6.055l-550 300A50 50 0 0 0 100 450v700a50 50 0 0 0 25.977 43.945l550 300A50 50 0 0 0 700 1500h100a50 50 0 0 0 24.023-6.055l550-300A50 50 0 0 0 1400 1150V450a50 50 0 0 0-25.977-43.945l-550-300A50 50 0 0 0 800 100zm38.281 200h24.024L1200 539.063v521.875L761.719 1300H738.28L300 1060.938V539.062z", "fillRule": "evenodd"})
      ]
    );
  }
});
