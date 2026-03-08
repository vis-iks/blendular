import { defineComponent, h } from 'vue';

export const SeqSequencer = defineComponent({
  name: 'SeqSequencer',
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
        h('path', {"d": "M350 100a50.005 50.005 0 0 0-50 50v250H150a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h1100a50.005 50.005 0 0 0 50-50V500h150a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h1000v200H400zM200 500h1000v200H200zM350 1100a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h1100a50.005 50.005 0 0 0 50-50v-300a50.005 50.005 0 0 0-50-50zm50 100h1000v200H400z", "fillRule": "evenodd"})
      ]
    );
  }
});
