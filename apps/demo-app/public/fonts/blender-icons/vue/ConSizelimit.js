import { defineComponent, h } from 'vue';

export const ConSizelimit = defineComponent({
  name: 'ConSizelimit',
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
        h('path', {"d": "M150.001 900c-27.613.003-49.997 22.387-50 50v400c.003 27.613 22.387 49.997 50 50h400c27.613-.003 49.997-22.387 50-50V950c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M152.149 300a50.005 50.005 0 0 0-50 49.805l-2.15 450 100 .4 1.95-400.195h898.052v900h-400v100h450a50.005 50.005 0 0 0 50-50v-1000a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M1500.001 600V400h-100v200zm0-300V100h-100v200zm0 1200v-200h-100v200zm0-300v-200h-100v200zm0-300V700h-100v200z", "fillRule": "evenodd"})
      ]
    );
  }
});
