import { defineComponent, h } from 'vue';

export const Nla = defineComponent({
  name: 'Nla',
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
        h('path', {"d": "M150 800a50.005 50.005 0 0 1-50-50V450a50.005 50.005 0 0 1 50-50h550v100H200v200h500v100zm850 0V700h200V500h-200V400h250a50.005 50.005 0 0 1 50 50v300a50.005 50.005 0 0 1-50 50z", "fillRule": "evenodd"}),
        h('path', {"d": "M350 500a50.005 50.005 0 0 1-50-50V150a50.005 50.005 0 0 1 50-50h350v100H400v200h300v100zm650 0V400h400V200h-400V100h450a50.005 50.005 0 0 1 50 50v300a50.005 50.005 0 0 1-50 50z", "fillRule": "evenodd"}),
        h('path', {"d": "M800 100v1396.484h100V100zM350 1100c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h350v-400zm650 0v400h450c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
