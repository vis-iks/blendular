import { defineComponent, h } from 'vue';

export const TpaintHlt = defineComponent({
  name: 'TpaintHlt',
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
        h('path', {"d": "M100 100v200h200V100zm200 200v200h200V300zm200 0h200V100H500zm200 0v200h200V300zm200 0h200V100H900zm200 0v200h200V300zm200 0h200V100h-200zm0 200v200h200V500zM300 700V500H100v200zm200 0h200V500H500zm400 0h200V500H900z", "fillRule": "evenodd"}),
        h('path', {"d": "M100 800v350c0 82.843 67.157 150 150 150s150-67.157 150-150v-50c0-50 53.412-100 100-100 55.229 0 100 44.772 100 100v250c0 82.843 67.157 150 150 150s150-67.157 150-150v-150c0-55.228 44.772-100 100-100s100-44.771 100-100V800H300z", "fillRule": "evenodd"})
      ]
    );
  }
});
