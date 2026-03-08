import { defineComponent, h } from 'vue';

export const Xray = defineComponent({
  name: 'Xray',
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
        h('path', {"d": "M150 400a50.005 50.005 0 0 0-50 50v1000a50.005 50.005 0 0 0 50 50h1000a50.005 50.005 0 0 0 50-50V450a50.005 50.005 0 0 0-50-50zm50 100h900v900H200z", "fillRule": "evenodd"}),
        h('path', {"d": "M500 600v200h100V600zm0 300v150c.003 27.613 22.387 49.997 50 50h150v-100H600V900zm300 100v100h200v-100zM550 100a50.005 50.005 0 0 0-50 50v150h100V200h800v800h-100v100h150a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
