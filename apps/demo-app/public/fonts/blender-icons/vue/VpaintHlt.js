import { defineComponent, h } from 'vue';

export const VpaintHlt = defineComponent({
  name: 'VpaintHlt',
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
        h('path', {"d": "M600 500v700c0 50 25 100 100 100s100-50 100-100v-100c0-50 53.412-100 100-100 55.229 0 100 44.772 100 100v250c0 82.843 67.157 150 150 150s150-67.157 150-150v-150c0-55.228 44.772-100 100-100s100-44.771 100-100V691.211a150 150 0 0 1-50 8.789h-300a150.015 150.015 0 0 1-150-150v-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M450 100a50.005 50.005 0 0 1 50 50v150h600v-50a50.005 50.005 0 0 1 50-50h300a50.005 50.005 0 0 1 50 50v300a50.005 50.005 0 0 1-50 50h-300a50.005 50.005 0 0 1-50-50V400H500v50a50.005 50.005 0 0 1-50 50H150a50.005 50.005 0 0 1-50-50V150a50.005 50.005 0 0 1 50-50zm-50 100H200v200h200zm1000 100h-200v200h200z", "fillRule": "evenodd"})
      ]
    );
  }
});
