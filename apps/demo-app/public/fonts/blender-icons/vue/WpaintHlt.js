import { defineComponent, h } from 'vue';

export const WpaintHlt = defineComponent({
  name: 'WpaintHlt',
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
        h('path', {"d": "M200 100v200H100v400h100v200h200V100zm1000 0v800h200V700h100V300h-100V100zM500 400v200h600V400z", "fillRule": "evenodd"}),
        h('path', {"d": "M500 700v500c0 50 25 100 100 100s100-50 100-100v-100c0-50 53.412-100 100-100 55.229 0 100 44.772 100 100v250c0 82.843 67.157 150 150 150s150-67.157 150-150v-50c0-55.228 44.772-100 100-100s100-44.771 100-100v-100h-300V700z", "fillRule": "evenodd"})
      ]
    );
  }
});
